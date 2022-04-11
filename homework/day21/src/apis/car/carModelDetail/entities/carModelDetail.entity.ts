import { Field, ObjectType } from '@nestjs/graphql';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { CarAuto } from '../../carAuto/entities/carAuto.entity';
import { CarModel } from '../../carModel/entities/carModel.entity';
import { CarWheel } from '../../carWheel/entities/carWheel.entity';

@Entity()
@ObjectType()
export class CarModelDetail {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;
    @Column()
    @Field(() => String)
    color: string;
    @Column()
    @Field(() => String)
    interior: string;

    @JoinColumn() //컬럼을 가지고 연결하겠다는 뜻... 기준이 있는곳에 이걸 둔다
    @OneToOne(() => CarWheel) // 일대일 관계 괄호안에 함수가 들어감
    @Field(() => CarWheel)
    carWheel: CarWheel;

    @JoinColumn() //컬럼을 가지고 연결하겠다는 뜻... 기준이 있는곳에 이걸 둔다
    @OneToOne(() => CarAuto) // 일대일 관계 괄호안에 함수가 들어감
    @Field(() => CarAuto)
    carAuto: CarAuto;

    @ManyToOne(() => CarModel)
    @Field(() => CarModel)
    carModel: CarModel;
}
