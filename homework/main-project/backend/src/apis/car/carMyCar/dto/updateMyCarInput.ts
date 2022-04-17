import { InputType, PartialType } from '@nestjs/graphql';
import { CreateMyCarInput } from './createMyCarInput';

@InputType()
export class UpdateMyCarInput extends PartialType(CreateMyCarInput) {}
