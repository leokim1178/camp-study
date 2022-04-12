import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'backend/src/apis/product/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //Entity라는 함수 안에 내부를 table로 만들어주는 기능이 내장되어 있다
@ObjectType()
export class ProductTag {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    name: string;
    
    @ManyToMany(() => Product, (products) => products.productTags)
    @Field(() => [Product])
    product: Product[];
}
