import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class CarWheel {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;
    @Column()
    @Field(() => String)
    name: string;
    @Column()
    @Field(() => Int)
    size: number;
    @Column()
    @Field(() => Number)
    price: number;
}
