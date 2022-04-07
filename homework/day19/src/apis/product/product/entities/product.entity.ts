import { Field, Int, ObjectType } from '@nestjs/graphql';
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
@ObjectType()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;
    @Column()
    @Field(() => String)
    name: string;
    @Column()
    @Field(() => Int)
    price: number;
    @Column()
    @Field(() => String)
    description: string;
    @Column({ type: 'datetime', default: () => 'NOW()' })
    @Field(() => Date)
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
