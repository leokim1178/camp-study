import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarModelInput {
    @Field(() => String)
    name: string;

    @Field(() => Int)
    range: number;

    @Field(() => Int)
    speed: number;

    @Field(() => Float)
    zero100: number;

    @Field(() => Int)
    price: number;

    @Field(() => String)
    color: string;

    @Field(() => String)
    intColor: string;

    @Field(() => String)
    wd: string;

    @Field(() => Int)
    seatSize: number;

    @Field(() => String)
    carTypeId: string;
}
