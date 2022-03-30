import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //database,typeorm에서 인식시키는 방법
@ObjectType() //graphql에서 인식시키는 방법
export class Starbucks {
    @PrimaryGeneratedColumn('increment') //database,typeorm에서 인식시키는 방법
    @Field(() => Int) //graphql에서 인식시키는 방법
    number: number;
    @Column()
    @Field(() => String)
    productname: string;
    @Column()
    @Field(() => Int)
    price: number;
    @Column()
    @Field(() => Int)
    calorie: number;
    @Column()
    @Field(() => Int)
    fat: number;
    @Column()
    @Field(() => Int)
    protein: number;
    @Column()
    @Field(() => Int)
    sodium: number;
    @Column()
    @Field(() => Int)
    sugar: number;
    @Column()
    @Field(() => Int)
    caffeine: number;
}
