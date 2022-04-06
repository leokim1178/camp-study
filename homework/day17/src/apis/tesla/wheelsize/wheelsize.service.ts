import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WheelSize } from './entities/WheelSize.entity';

@Injectable()
export class WheelSizeService {
    constructor(
        @InjectRepository(WheelSize)
        private readonly WheelSizeRepository: Repository<WheelSize>,
    ) {}

    async findAll() {
        return await this.WheelSizeRepository.find();
    }
    async findOne({ WheelSizeId }) {
        return await this.WheelSizeRepository.findOne({
            where: { id: WheelSizeId },
        });
    }

    async create({ createWheelSizeInput }) {
        const result = await this.WheelSizeRepository.save({
            ...createWheelSizeInput,
        });
        return result;
    }
    async update({ WheelSizeId, updateWheelSizeInput }) {
        const WheelSize = await this.WheelSizeRepository.findOne({
            where: {
                id: WheelSizeId,
            },
        });
        const newWheelSize = {
            ...WheelSize,
            ...updateWheelSizeInput,
        };
        return await this.WheelSizeRepository.save(newWheelSize);
    }
}
