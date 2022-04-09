import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CarModelDetailService } from './carModelDetail.service';
import { CreateModelDetailInput } from './dto/createModelDetailInput';
import { UpdateModelDetailInput } from './dto/updateModelDetailInput';
import { CarModelDetail } from './entities/carModelDetail.entity';

@Resolver()
export class CarModelDetailResolver {
    constructor(
        private readonly carModelDetailService: CarModelDetailService,
    ) {}

    @Query(() => [CarModelDetail])
    fetchCarModelDetails() {
        return this.carModelDetailService.findAll();
    }

    @Mutation(() => CarModelDetail)
    createCarModelDetail(
        @Args('createModelDetailInput')
        createModelDetailInput: CreateModelDetailInput,
    ) {
        return this.carModelDetailService.create({ createModelDetailInput });
    }

    @Mutation(() => CarModelDetail)
    updateCarModelDetail(
        @Args('carModelDetailId')
        carModelDetailId: string, //
        @Args('updateModelDetailInput')
        updateModelDetailInput: UpdateModelDetailInput, //
    ) {
        return this.carModelDetailService.update({
            carModelDetailId,
            updateModelDetailInput,
        });
    }
}
