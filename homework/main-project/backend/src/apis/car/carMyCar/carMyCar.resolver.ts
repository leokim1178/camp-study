import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarMyCarService } from './carMyCar.service';
import { CreateMyCarInput } from './dto/createMyCarInput';
import { UpdateMyCarInput } from './dto/updateMyCarInput';
import { CarMyCar } from './entities/carMyCar.entity';

@Resolver()
export class CarMyCarResolver {
    constructor(private readonly carMyCarService: CarMyCarService) {}

    @Query(() => [CarMyCar])
    fetchCarMyCars() {
        return this.carMyCarService.findAll();
    }

    @Query(() => CarMyCar)
    fetchCarMyCar(
        @Args('carMyCarId')
        carMyCarId: string,
    ) {
        return this.carMyCarService.findOne({ carMyCarId });
    }

    @Mutation(() => CarMyCar)
    createCarMyCar(
        @Args('createMyCarInput')
        createMyCarInput: CreateMyCarInput,
    ) {
        return this.carMyCarService.create({ createMyCarInput });
    }

    @Mutation(() => CarMyCar)
    updateCarMyCar(
        @Args('carMyCarId')
        carMyCarId: string, //
        @Args('updateMyCarInput')
        updateMyCarInput: UpdateMyCarInput, //
    ) {
        return this.carMyCarService.update({
            carMyCarId,
            updateMyCarInput,
        });
    }

    @Mutation(() => Boolean)
    deleteCarMyCar(
        @Args('carMyCarId')
        carMyCarId: string,
    ) {
        return this.carMyCarService.delete({ carMyCarId });
    }

    @Mutation(() => Boolean)
    restoreCarMyCar(
        @Args('carMyCarId')
        carMyCarId: string,
    ) {
        return this.carMyCarService.restore({ carMyCarId });
    }
}
