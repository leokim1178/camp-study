import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './creatProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}
//OmiType
//PickType
