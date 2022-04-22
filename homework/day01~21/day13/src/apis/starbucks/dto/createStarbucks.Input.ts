import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateStarbucksInput {
    @Field(() => String)
    productname: string;
    @Field(() => Int)
    price: number;
    @Field(() => Int)
    calorie: number;
    @Field(() => Int)
    fat: number;
    @Field(() => Int)
    protein: number;
    @Field(() => Int)
    sodium: number;
    @Field(() => Int)
    sugar: number;
    @Field(() => Int)
    caffeine: number;
}
