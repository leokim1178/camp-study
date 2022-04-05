import { InputType, PartialType } from '@nestjs/graphql';
import { CreateModelInput } from './createModelInput';

@InputType()
export class UpdateModelInput extends PartialType(CreateModelInput) {}
