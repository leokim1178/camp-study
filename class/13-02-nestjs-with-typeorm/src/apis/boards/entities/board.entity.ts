import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //
@ObjectType() //sql에서 인식시키는 방법
export class Board {
    @PrimaryGeneratedColumn('increment')
    @Field(() => Int) //sql에서 인식시키는 방법
    number: number;
    @Column()
    @Field(() => String)
    writer: string;
    @Column()
    @Field(() => String)
    title: string;
    @Column()
    @Field(() => String)
    contents: string;
}
