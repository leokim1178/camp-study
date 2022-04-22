import { InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './createUserInput';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {}
