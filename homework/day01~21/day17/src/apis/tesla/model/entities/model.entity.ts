import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Type } from 'src/apis/tesla/type/entities/type.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Model {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    model: string;

    @Column()
    @Field(() => Int)
    range: number;

    @Column()
    @Field(() => Int)
    speed: number;

    @Column()
    @Field(() => Float)
    zero100: number;

    @Column()
    @Field(() => Int)
    price: number;

    @ManyToOne(() => Type)
    type: Type;
}
