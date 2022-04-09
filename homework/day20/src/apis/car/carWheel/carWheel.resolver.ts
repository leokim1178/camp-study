import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarWheelService } from './carWheel.service';
import { CreateCarWheelInput } from './dto/createCarWheelInput';

import { CarWheel } from './entities/carWheel.entity';

@Resolver()
export class CarWheelResolver {
    constructor(private readonly carWheelService: CarWheelService) {}

    @Query(() => [CarWheel])
    fetchCarModels() {
        return this.carWheelService.findAll();
    }

    @Mutation(() => CarWheel)
    createCarWheel(
        @Args('createCarWheelInput')
        createCarWheelInput: CreateCarWheelInput,
    ) {
        return this.carWheelService.create({ createCarWheelInput });
    }
}
