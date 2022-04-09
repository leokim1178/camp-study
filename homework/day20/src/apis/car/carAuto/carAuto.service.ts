import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarAuto } from './entities/carAuto.entity';

@Injectable()
export class CarAutoService {
    constructor(
        @InjectRepository(CarAuto)
        private readonly carAutoRepository: Repository<CarAuto>,
    ) {}
    async findAll() {
        return await this.carAutoRepository.find();
    }
    async create({ isAuto, price }) {
        return await this.carAutoRepository.save({ isAuto, price });
    }
}
