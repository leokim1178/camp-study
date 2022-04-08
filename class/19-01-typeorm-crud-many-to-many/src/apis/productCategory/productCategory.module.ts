import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryResolver } from './productCategory.resolver';
import { ProductCategoryService } from './productCategory.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProductCategory])],
    providers: [
        ProductCategoryService, //여기에 의존성 주입
        ProductCategoryResolver,
    ],
})
export class ProductCategoryModule {}
