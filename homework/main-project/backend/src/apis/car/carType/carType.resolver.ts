import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CarType } from './entities/carType.entity';
import { CarTypeService } from './carType.service';

@Resolver()
export class CarTypeResolver {
    constructor(private readonly carTypeService: CarTypeService) {}

    @Mutation(() => CarType)
    async createCarType(
        @Args('id') id: string,
        @Args('type') type: string,
        @Args('description') description: string,
    ) {
        return await this.carTypeService.create({ id, type, description });
    }
}
