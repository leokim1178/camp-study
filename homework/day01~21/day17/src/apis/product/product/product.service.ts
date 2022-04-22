import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async findAll() {
        return await this.productRepository.find();
    }

    async findOne({ productId }) {
        return await this.productRepository.findOne({
            where: { id: productId },
        });
    }

    async create({ createProductInput }) {
        const result = await this.productRepository.save({
            ...createProductInput,
        }); //product를 데이터베이스에 저장
        console.log(result);
        return result;
    }

    async update({ productId, updateProductInput }) {
        const product = await this.productRepository.findOne({
            where: { id: productId },
        });
        const newProduct = {
            ...product,
            ...updateProductInput,
        };
        return await this.productRepository.save(newProduct); //id가 있다면 id를 바탕으로 수정하기가 작동한다
    }
}
