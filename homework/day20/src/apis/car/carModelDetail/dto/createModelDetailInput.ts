import { Field, InputType } from '@nestjs/graphql';
import { CreateCarAutoInput } from '../../carAuto/dto/createCarAutoInput';
import { CreateCarWheelInput } from '../../carWheel/dto/createCarWheelInput';

@InputType()
export class CreateModelDetailInput {
    @Field(() => String)
    color: string;
    @Field(() => String)
    interior: string;

    @Field(() => CreateCarWheelInput)
    carWheel: CreateCarWheelInput;

    @Field(() => CreateCarAutoInput)
    carAuto: CreateCarAutoInput;

    @Field(() => String)
    carModelId: string;
}
