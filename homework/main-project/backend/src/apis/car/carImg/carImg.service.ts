import { Storage } from '@google-cloud/storage';
import {
    ConflictException,
    Injectable,
    UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUpload } from 'graphql-upload';
import { Repository } from 'typeorm';
import { CarMyCar } from '../carMyCar/entities/carMyCar.entity';
import { CarImg } from './entities/carImg.entity';

export interface ICarImg {
    imgs: FileUpload[];
}

@Injectable()
export class CarImgService {
    constructor(
        @InjectRepository(CarImg)
        private readonly carImgRepository: Repository<CarImg>,
        @InjectRepository(CarMyCar)
        private readonly carMyCarRepository: Repository<CarMyCar>,
    ) {}

    async upload({ imgs }: ICarImg) {
        const storage = new Storage({
            keyFilename: process.env.STORAGE_KEY_FILENAME,
            projectId: process.env.STORAGE_PROJECT_ID,
        }).bucket(process.env.STORAGE_BUCKET);

        const waitedImgs = await Promise.all(imgs);

        const results = await Promise.all(
            waitedImgs.map((el) => {
                return new Promise((resolve, reject) => {
                    el.createReadStream()
                        .pipe(storage.file(el.filename).createWriteStream())
                        .on('finish', () =>
                            resolve(
                                `${process.env.STORAGE_BUCKET}/${el.filename}`,
                            ),
                        )
                        .on('error', () => reject());
                });
            }),
        );

        return results;
    }

    async saveImg({ myCarId, imgURL }) {
        const Img = await this.carImgRepository.findOne({
            myCar: myCarId,
            imgURL,
        });
        if (Img) throw new ConflictException('이미 등록된 이미지입니다');
        const myCar = await this.carMyCarRepository.findOne({
            where: { id: myCarId },
        });
        return await this.carImgRepository.save({ imgURL, myCar });
    }
    async updateImg({ myCarId, imgURL }) {
        const myCar = await this.carMyCarRepository.findOne({
            where: { id: myCarId },
        });
        if (!myCar)
            throw new UnprocessableEntityException(
                '등록되지 않은 차정보입니다',
            );
        const Imgs = await this.carImgRepository.find({
            where: { myCar: myCarId },
        });

        const Img = Imgs.filter((x) => {
            return x.imgURL === imgURL;
        });
        if (Img.length) return Img[0];
        else {
            const myCar = await this.carMyCarRepository.findOne({
                where: { id: myCarId },
            });
            return await this.carImgRepository.save({ imgURL, myCar });
        }
    }
}
