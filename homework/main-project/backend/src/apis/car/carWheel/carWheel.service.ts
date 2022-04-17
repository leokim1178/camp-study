import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarWheel } from './entities/carWheel.entity';

@Injectable()
export class CarWheelService {
    constructor(
        @InjectRepository(CarWheel)
        private readonly carWheelRepository: Repository<CarWheel>,
    ) {}

    async findAll() {
        const result = await this.carWheelRepository.find({
            relations: ['carModel', 'carWheel'],
            withDeleted: true,
        });

        return result;
    }

    async findOne({ carWheelId }) {
        const result = await this.carWheelRepository.findOne({
            where: { wheelId: carWheelId },
            relations: ['carM', 'carWheel'],
            withDeleted: true,
        });

        return result;
    }

    async create({ createCarWheelInput }) {
        const exWheel = await this.carWheelRepository.findOne({
            where: {
                ...createCarWheelInput,
            },
        });

        if (exWheel) throw new ConflictException('같은 값이 존재합니다');
        return await this.carWheelRepository.save({
            ...createCarWheelInput,
        });
    }

    async update({ wheelId, updateCarWheelInput }) {
        const exWheel = await this.carWheelRepository.findOne({
            where: { wheelId },
        });

        return await this.carWheelRepository.save({
            ...exWheel,
            ...updateCarWheelInput,
        });
    }

    async delete({ carWheelId }) {
        const result = await this.carWheelRepository.softDelete({
            wheelId: carWheelId,
        }); // 다양한 조건으로 삭제가능!!
        return result.affected ? true : false;
    }

    async restore({ carWheelId }) {
        const result = await this.carWheelRepository.restore({
            wheelId: carWheelId,
        });
        return result.affected ? true : false;
    }
}
