import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class CarType {
    @PrimaryColumn()
    @Field(() => String)
    id: string;
    @Column()
    @Field(() => String)
    type: string;
    @Column({ type: 'varchar' })
    @Field(() => String)
    description: string;
}
