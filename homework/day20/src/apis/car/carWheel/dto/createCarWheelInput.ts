import { InputType, OmitType } from '@nestjs/graphql';
import { CarWheel } from '../entities/carWheel.entity';

@InputType()
export class CreateCarWheelInput extends OmitType(
    CarWheel,
    ['id'],
    InputType,
) {}
