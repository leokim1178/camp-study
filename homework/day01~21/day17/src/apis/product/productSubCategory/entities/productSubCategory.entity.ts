import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '../../product/entities/product.entity';
import { ProductMainCategory } from '../../productMainCategory/entities/productMainCategory.entity';

@Entity()
export class ProductSubCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    subcategory: string;
    @ManyToOne(() => ProductMainCategory)
    productMainCategory: ProductMainCategory;

    @ManyToMany(() => Product, (products) => products.productSubCategory)
    product: Product[];
}
