import { Injectable } from '@nestjs/common';
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
        return await this.carWheelRepository.find();
    }
}
