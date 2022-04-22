import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductSubCategory } from '../../productSubCategory/entities/productSubCategory.entity';
import { ProductTag } from '../../productTag/entities/productTag.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
    @Column()
    price: number;
    @Column()
    description: string;
    @Column()
    releaseDate: Date;

    @JoinTable()
    @ManyToMany(
        () => ProductSubCategory,
        (productSubCategories) => productSubCategories.product,
    )
    productSubCategory: ProductSubCategory[];

    @JoinTable()
    @ManyToMany(() => ProductTag, (productTags) => productTags.product)
    productTag: ProductTag[];
}
