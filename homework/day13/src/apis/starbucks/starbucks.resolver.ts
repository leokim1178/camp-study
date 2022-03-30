import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { StarbucksService } from './starbucks.service';
import { CreateStarbucksInput } from './dto/createStarbucks.Input';

import { Starbucks } from './entities/starbucks.entity';

@Resolver()
export class StarbucksResolver {
    constructor(private readonly starbucksService: StarbucksService) {}

    @Query(() => [Starbucks])
    fetchStarbucks() {
        return this.starbucksService.findAll();
    }

    @Mutation(() => String)
    createStarbucks(
        @Args('productname') productname: string,
        @Args('price') price: number,
        @Args('calorie') calorie: number,
        @Args('fat') fat: number,
        @Args('protein') protein: number,
        @Args('sodium') sodium: number,
        @Args('sugar') sugar: number,
        @Args('caffeine') caffeine: number,
        @Args('createStarbucksInput')
        createStarbucksInput: CreateStarbucksInput,
    ) {
        console.log(
            '음료명: ' +
                productname +
                ', 가격: ' +
                price +
                ', 1회 제공량(kcal): ' +
                calorie,
            +', 포화지방(g): ' +
                fat +
                ', 단백질(g): ' +
                protein +
                ', 나트륨(mg): ' +
                sodium +
                ', 당류(g): ' +
                sugar +
                ', 카페인(mg): ' +
                caffeine,
        );
        console.log(createStarbucksInput);
        return this.starbucksService.wellDone();
    }
}
