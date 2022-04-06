import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateWheelSizeInput {
    @Field(() => String)
    WheelSize: string;

    @Field(() => Int)
    range: number;

    @Field(() => Int)
    speed: number;

    @Field(() => Float)
    zero100: number;

    @Field(() => Int)
    price: number;
}
