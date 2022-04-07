import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarModel } from './entities/carModel.entity';

@Injectable()
export class CarModelService {
    constructor(
        @InjectRepository(CarModel)
        private readonly carModelRepository: Repository<CarModel>,
    ) {}

    async findAll() {
        return await this.carModelRepository.find({
            relations: ['carType'],
            withDeleted: true,
        });
    }
    async findOne({ carModelId }) {
        return await this.carModelRepository.findOne({
            where: { id: carModelId },
            relations: ['carType'],
            withDeleted: true,
        });
    }

    async create({ createCarModelInput }) {
        const { carTypeId, ...carModel } = createCarModelInput; //구조분해할당

        return await this.carModelRepository.save({
            ...carModel, //{id:result.id} 이렇게하면 못받을수 있다 그냥 통으로 넘기는게 좋다
            carType: { id: carTypeId },
        });
    }
    async update({ carModelId, updateCarModelInput }) {
        const carModel = await this.carModelRepository.findOne({
            where: {
                id: carModelId,
            },
        });
        const newCarModel = {
            ...carModel,
            ...updateCarModelInput,
        };
        return await this.carModelRepository.save(newCarModel);
    }

    async delete({ carModelId }) {
        const result = await this.carModelRepository.softDelete({
            id: carModelId,
        }); // 다양한 조건으로 삭제가능!!
        return result.affected ? true : false;
    }

    async restore({ carModelId }) {
        const result = await this.carModelRepository.restore({
            id: carModelId,
        });
        return result.affected ? true : false;
    }
}
