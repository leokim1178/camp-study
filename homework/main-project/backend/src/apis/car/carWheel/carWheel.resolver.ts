import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarWheelService } from './carWheel.service';
import { CreateCarWheelInput } from './dto/createCarWheelInput';
import { UpdateCarWheelInput } from './dto/updateCarWheelInput';
import { CarWheel } from './entities/carWheel.entity';

@Resolver()
export class CarWheelResolver {
    constructor(private readonly carWheelService: CarWheelService) {}

    @Query(() => [CarWheel])
    fetchCarWheels() {
        return this.carWheelService.findAll();
    }

    @Query(() => CarWheel)
    fetchCarWheel(
        @Args('carWheelId')
        carWheelId: string,
    ) {
        return this.carWheelService.findOne({ carWheelId });
    }

    @Mutation(() => CarWheel)
    createCarWheel(
        @Args('createCarWheelInput')
        createCarWheelInput: CreateCarWheelInput,
    ) {
        return this.carWheelService.create({ createCarWheelInput });
    }
    @Mutation(() => CarWheel)
    updateCarWheel(
        @Args('wheelId')
        wheelId: string,
        @Args('updateCarWheelInput')
        updateCarWheelInput: UpdateCarWheelInput,
    ) {
        return this.carWheelService.update({ updateCarWheelInput, wheelId });
    }
}
