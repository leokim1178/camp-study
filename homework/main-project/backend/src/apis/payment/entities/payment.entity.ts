import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User } from 'src/apis/user/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

export enum PAYMENT_STATUS_ENUM {
    PAYMENT = 'PAYMENT',
    CANCEL = 'CANCEL',
}

registerEnumType(PAYMENT_STATUS_ENUM, {
    name: 'PAYMENT_STATUS_ENUM',
});

@Entity()
@ObjectType()
export class Payment {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;
    @Column()
    @Field(() => String)
    impUid: string;

    @Column()
    @Field(() => Int)
    amount: number;

    @Column({ type: 'enum', enum: PAYMENT_STATUS_ENUM }) //하드코딩된 건 대문자로 쓰는게 관례
    @Field(() => PAYMENT_STATUS_ENUM)
    status: string;

    @ManyToOne(() => User)
    @Field(() => User)
    user: User;

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;
}
