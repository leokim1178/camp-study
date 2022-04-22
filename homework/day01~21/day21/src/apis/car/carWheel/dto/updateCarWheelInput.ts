import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCarWheelInput } from './createCarWheelInput';

@InputType()
export class UpdateCarWheelInput extends PartialType(CreateCarWheelInput) {}
