import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CarMyCar } from '../../carMyCar/entities/carMyCar.entity';

@Entity()
@ObjectType()
export class CarImg {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    imgURL: string;

    @ManyToOne(() => CarMyCar)
    @Field(() => CarMyCar)
    myCar: CarMyCar;
}
