import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CarModel } from '../carModel/entities/carModel.entity';
import { CarWheel } from '../carWheel/entities/carWheel.entity';
import { CarMyCar } from './entities/carMyCar.entity';

@Injectable()
export class CarMyCarService {
    constructor(
        @InjectRepository(CarMyCar)
        private readonly carMyCarRepository: Repository<CarMyCar>,
        @InjectRepository(CarWheel)
        private readonly carWheelRepository: Repository<CarWheel>,

        @InjectRepository(CarModel)
        private readonly carModelRepository: Repository<CarModel>,
    ) {}
    async findAll() {
        const result = await this.carMyCarRepository.find({
            relations: ['carModel', 'carWheel'],
            withDeleted: true,
        });

        return result;
    }

    async findOne({ carMyCarId }) {
        const result = await this.carMyCarRepository.findOne({
            where: { id: carMyCarId },
            relations: ['carModel', 'carWheel'],
            withDeleted: true,
        });

        return result;
    }

    async create({ createMyCarInput }) {
        const {
            carWheelId, //
            carMyCarId,
            ...detail
        } = createMyCarInput;

        const wheelResult = await this.carWheelRepository.findOne({
            where: {
                wheelId: carWheelId,
            },
        });

        if (!wheelResult)
            throw new UnprocessableEntityException('잘못된 휠 정보입니다');

        const modelResult = await this.carModelRepository.findOne({
            where: {
                id: carMyCarId,
            },
        });
        if (!modelResult)
            throw new UnprocessableEntityException('잘못된 모델정보입니다');

        return await this.carMyCarRepository.save({
            ...detail,
            carWheel: wheelResult,
            carModel: modelResult,
        });
    }

    async update({ carMyCarId, updateMyCarInput }) {
        const MyCar = await this.carMyCarRepository.findOne({
            where: {
                id: carMyCarId,
            },
        });
        const newMyCar = {
            ...MyCar,
            ...updateMyCarInput,
        };
        return await this.carMyCarRepository.save(newMyCar);
    }

    async delete({ carMyCarId }) {
        const result = await this.carMyCarRepository.softDelete({
            id: carMyCarId,
        }); // 다양한 조건으로 삭제가능!!
        return result.affected ? true : false;
    }

    async restore({ carMyCarId }) {
        const result = await this.carMyCarRepository.restore({
            id: carMyCarId,
        });
        return result.affected ? true : false;
    }
}
