import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';

@Injectable()
export class ProductCategoryService {
    constructor(
        @InjectRepository(ProductCategory)
        private readonly productCategoryRepository: Repository<ProductCategory>,
    ) {}

    async create({ name }) {
        const result = await this.productCategoryRepository.save({ name }); //카테고리를 데이터베이스에 저장
        console.log(result);
        return result;
    }
}