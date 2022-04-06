import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from './entities/model.entity';

@Injectable()
export class ModelService {
    constructor(
        @InjectRepository(Model)
        private readonly modelRepository: Repository<Model>,
    ) {}

    async findAll() {
        return await this.modelRepository.find();
    }
    async findOne({ modelId }) {
        return await this.modelRepository.findOne({
            where: { id: modelId },
        });
    }

    async create({ createModelInput }) {
        const result = await this.modelRepository.save({ ...createModelInput });
        return result;
    }
    async update({ modelId, updateModelInput }) {
        const model = await this.modelRepository.findOne({
            where: {
                id: modelId,
            },
        });
        const newModel = {
            ...model,
            ...updateModelInput,
        };
        return await this.modelRepository.save(newModel);
    }
}
