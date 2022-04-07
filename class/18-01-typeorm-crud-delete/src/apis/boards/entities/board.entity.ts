import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //database에서 인식시키는 방법
@ObjectType() //graphql에서 인식시키는 방법
export class Board {
    @PrimaryGeneratedColumn('increment') //database에서 인식시키는 방법
    @Field(() => Int) //graphql에서 인식시키는 방법
    number: number;
    @Column() //database에서 인식시키는 방법
    @Field(() => String)
    writer: string;
    @Column()
    @Field(() => String)
    title: string;
    @Column()
    @Field(() => String)
    contents: string;
}
