import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCarAutoInput } from './createCarAutoInput';

@InputType()
export class UpdateCarAutoInput extends PartialType(CreateCarAutoInput) {}
