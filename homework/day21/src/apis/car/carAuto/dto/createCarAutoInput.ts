import { InputType, OmitType } from '@nestjs/graphql';
import { CarAuto } from '../entities/carAuto.entity';

@InputType()
export class CreateCarAutoInput extends OmitType(
    CarAuto,
    ['id'], //
    InputType,
) {}
