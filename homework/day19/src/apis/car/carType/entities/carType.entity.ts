import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class CarType {
    @PrimaryGeneratedColumn('uuid')
    @Field()
    id: string;
    @Column()
    @Field()
    type: string;
}
