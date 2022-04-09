import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarAutoService } from './carAuto.service';
import { CarAuto } from './entities/carAuto.entity';

@Resolver()
export class CarAutoResolver {
    constructor(private readonly carAutoService: CarAutoService) {}

    @Query(() => [CarAuto])
    fetchCarModels() {
        return this.carAutoService.findAll();
    }

    @Mutation(() => CarAuto)
    createCarAuto(
        @Args('isAuto')
        isAuto: string,
        @Args('price')
        price: number,
    ) {
        return this.carAutoService.create({ isAuto, price });
    }
}
