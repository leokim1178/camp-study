import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { CarType } from 'src/apis/car/carType/entities/carType.entity';
import {
    Column,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class CarModel {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    name: string;

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

    @Column()
    @Field(() => String)
    color: string;

    @Column()
    @Field(() => String)
    intColor: string;

    @Column()
    @Field(() => String)
    wd: string;

    @Column()
    @Field(() => Int)
    seatSize: number;

    @DeleteDateColumn() //
    @Field(() => Date)
    deletedAt: Date;

    @ManyToOne(() => CarType)
    carType: CarType;
}
