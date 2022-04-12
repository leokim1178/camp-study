import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCarModelInput {
    @Field(() => String)
    model: string;

    @Field(() => Int)
    range: number;

    @Field(() => Int)
    speed: number;

    @Field(() => Float)
    zero100: number;

    @Field(() => Int)
    price: number;

    @Field(() => String)
    wd: string;

    @Field(() => String)
    carTypeId: string;

    @Field(() => [String])
    carTags: string[];
}
