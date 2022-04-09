import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarAuto } from '../carAuto/entities/carAuto.entity';
import { CarModel } from '../carModel/entities/carModel.entity';
import { CarWheel } from '../carWheel/entities/carWheel.entity';
import { CarModelDetail } from './entities/carModelDetail.entity';

@Injectable()
export class CarModelDetailService {
    constructor(
        @InjectRepository(CarModelDetail)
        private readonly carModelDetailRepository: Repository<CarModelDetail>,
        @InjectRepository(CarWheel)
        private readonly carWheelRepository: Repository<CarWheel>,
        @InjectRepository(CarAuto)
        private readonly carAutoRepository: Repository<CarAuto>,
        @InjectRepository(CarModel)
        private readonly carModelRepository: Repository<CarModel>,
    ) {}
    async findAll() {
        return await this.carModelDetailRepository.find();
    }
    async create({ createModelDetailInput }) {
        const {
            carWheel, //
            carAuto,
            carModelId,
            ...detail
        } = createModelDetailInput;

        let wheelResult;
        const wheelFind = await this.carWheelRepository.findOne({
            ...carWheel,
        });
        if (wheelFind) {
            wheelResult = wheelFind;
        } else {
            wheelResult = await this.carWheelRepository.save({
                ...wheelFind,
            });
        }

        let autoResult;
        const autoFind = await this.carAutoRepository.findOne({
            ...carAuto,
        });
        if (autoFind) {
            autoResult = autoFind;
        } else {
            autoResult = await this.carAutoRepository.save({
                ...autoFind,
            });
        }
        const modelResult = await this.carModelRepository.findOne({
            where: {
                id: carModelId,
            },
        });

        return await this.carModelDetailRepository.save({
            ...detail,
            carWheel: wheelResult,
            carAuto: autoResult,
            carModel: modelResult,
        });
    }

    async update({ carModelDetailId, updateModelDetailInput }) {
        const ModelDetail = await this.carModelDetailRepository.findOne({
            where: {
                id: carModelDetailId,
            },
        });
        const newModelDetail = {
            ...ModelDetail,
            ...updateModelDetailInput,
        };
        return await this.carModelDetailRepository.save(newModelDetail);
    }
}
