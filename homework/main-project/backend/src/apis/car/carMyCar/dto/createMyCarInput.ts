import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMyCarInput {
    @Field(() => String)
    color: string;
    @Field(() => String)
    interior: string;
    @Field(() => Boolean)
    isAuto: boolean;

    @Field(() => String)
    carWheelId: string;

    @Field(() => String)
    carModelId: string;
}
