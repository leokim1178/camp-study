import { InputType, PartialType } from '@nestjs/graphql';
import { CreateWheelSizeInput } from './createWheelSizeInput';

@InputType()
export class UpdateWheelSizeInput extends PartialType(CreateWheelSizeInput) {}
