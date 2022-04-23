import { Storage } from '@google-cloud/storage';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUpload } from 'graphql-upload';

import { v4 as uuidv4 } from 'uuid';

import { getToday } from 'src/commons/libraries/utils';
import { Repository } from 'typeorm';
import { CarMyCar } from '../carMyCar/entities/carMyCar.entity';
import { CarImg } from './entities/carImg.entity';

interface ICarImg {
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
                    const imgName = `${getToday()}/${uuidv4()}/origin/${
                        el.filename
                    }`;
                    el.createReadStream()
                        .pipe(storage.file(imgName).createWriteStream())
                        .on('finish', () =>
                            resolve(`${process.env.STORAGE_BUCKET}/${imgName}`),
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
        //1. myCarId가 유효한지 확인
        const myCar = await this.carMyCarRepository.findOne({
            where: { id: myCarId },
        });
        if (!myCar)
            throw new UnprocessableEntityException(
                '등록되지 않은 myCarId 입니다',
            );
        //2. myCarId에 해당되는 이미지들 불러오기
        const myCarURLs = await this.carImgRepository.find({
            where: { myCar: myCarId },
        });

        //3. myCarId와 연결된 이미지 중 저장할 항목과 삭제할 항목 분리
        const newURLsArray = []; // 새롭게 저장해야하는 url들
        const pastURLs = []; //  이미 존재했던 url들

        for (let i = 0; i < imgURLs.length; i++) {
            await Promise.all(
                myCarURLs.map(async (el) => {
                    if (el.imgURL === imgURLs[i]) {
                        newURLsArray.push(el.imgURL);
                    } else {
                        pastURLs.push(el.imgURL);
                    }
                }),
            );
        }

        // 저장할 항목( 입력한 url들 - 새롭게 저장해야하는 url들 )
        const newURLs = imgURLs.filter((el) => {
            return !newURLsArray.includes(el);
        });
        // 삭제할 항목( 이미 존재했던 url들 - 새롭게 저장해야하는 url들 )
        const forDelete = [
            // 중복 제거
            ...new Set(
                pastURLs.filter((el) => {
                    return !newURLsArray.includes(el);
                }),
            ),
        ];

        // 4. 새로운 url들 저장
        await Promise.all(
            newURLs.map(async (el) => {
                return await this.carImgRepository.save({
                    myCar,
                    imgURL: el,
                });
            }),
        );

        // 5. 삭제할 url들 삭제
        await Promise.all(
            forDelete.map(async (el) => {
                return await this.carImgRepository.delete({
                    myCar,
                    imgURL: el,
                });
            }),
        );

        // 6. myCar에 해당되는 이미지 다시 추출 후 전송

        const saveResult = await this.carImgRepository.find({
            where: { myCar },
            relations: ['myCar'],
        });

        return saveResult;
    }
}
