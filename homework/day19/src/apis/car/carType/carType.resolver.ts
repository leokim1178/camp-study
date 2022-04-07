import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CarType } from './entities/carType.entity';
import { CarTypeService } from './carType.service';

@Resolver()
export class CarTypeResolver {
    constructor(private readonly carTypeService: CarTypeService) {}

    @Mutation(() => CarType)
    async createCarType(
        @Args('type') type: string, //
    ) {
        return await this.carTypeService.create({ type });
    }
}
