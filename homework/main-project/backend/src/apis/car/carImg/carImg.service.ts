import { Storage } from '@google-cloud/storage';
import {
    ConflictException,
    Injectable,
    UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUpload } from 'graphql-upload';
import { async } from 'rxjs';
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

    async create({ myCarId, imgURLs }) {
        const myCar = await this.carMyCarRepository.findOne({
            where: { id: myCarId },
        });

        const result = await imgURLs.map(async (el) => {
            return await this.carImgRepository.save({ imgURL: el, myCar });
        });

        return result;
    }
    async updateImg({ myCarId, imgURLs }) {
        const myCar = await this.carMyCarRepository.findOne({
            where: { id: myCarId },
        });
        if (!myCar)
            throw new UnprocessableEntityException(
                '등록되지 않은 차정보입니다',
            );

        const imgResult = [];
        for (let i = 0; i < imgURLs.length; i++) {
            const prevImg = await this.carImgRepository.findOne({
                where: {
                    myCar,
                    imgURL: imgURLs[i],
                },
            });
            if (prevImg) {
                imgResult.push(prevImg);
            } else {
                const newtag = await this.carImgRepository.save({
                    imgURL: imgURLs[i],
                    myCar,
                });
                imgResult.push(newtag);
            }
        }

        return imgResult;
    }
}
