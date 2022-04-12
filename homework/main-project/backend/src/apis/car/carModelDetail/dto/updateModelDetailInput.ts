import { InputType, PartialType } from '@nestjs/graphql';
import { CreateModelDetailInput } from './createModelDetailInput';

@InputType()
export class UpdateModelDetailInput extends PartialType(
    CreateModelDetailInput,
) {}
