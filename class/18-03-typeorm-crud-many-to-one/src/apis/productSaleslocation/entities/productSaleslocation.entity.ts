import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //Entity라는 함수 안에 내부를 table로 만들어주는 기능이 내장되어 있다
@ObjectType()
export class ProductSaleslocation {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;
    @Column()
    @Field(() => String)
    address: string;
    @Column()
    @Field(() => String)
    addressDetail: string;
    @Column()
    @Field(() => Float)
    lat: number;
    @Column()
    @Field(() => Float)
    lng: number;
    @Column()
    @Field(() => Date)
    meetingTime: Date;
}
