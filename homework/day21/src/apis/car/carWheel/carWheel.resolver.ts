import { Query, Resolver } from '@nestjs/graphql';
import { CarWheelService } from './carWheel.service';

import { CarWheel } from './entities/carWheel.entity';

@Resolver()
export class CarWheelResolver {
    constructor(private readonly carWheelService: CarWheelService) {}

    @Query(() => [CarWheel])
    fetchCarWheels() {
        return this.carWheelService.findAll();
    }
}
