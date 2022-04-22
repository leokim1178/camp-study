import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateWheelSizeInput } from './dto/createWheelSizeInput';
import { UpdateWheelSizeInput } from './dto/updateWheelSizeInput';
import { WheelSize } from './entities/WheelSize.entity';
import { WheelSizeService } from './wheelsize.service';

@Resolver()
export class WheelSizeResolver {
    constructor(private readonly WheelSizeService: WheelSizeService) {}

    @Query(() => [WheelSize])
    fetchWheelSizes() {
        return this.WheelSizeService.findAll();
    }
    @Query(() => WheelSize)
    fetchWheelSize(
        @Args('WheelSizeId')
        WheelSizeId: string,
    ) {
        return this.WheelSizeService.findOne({ WheelSizeId });
    }

    @Mutation(() => WheelSize)
    createWheelSize(
        @Args('createWheelSizeInput')
        createWheelSizeInput: CreateWheelSizeInput,
    ) {
        return this.WheelSizeService.create({ createWheelSizeInput });
    }
    @Mutation(() => WheelSize)
    async updateWheelSize(
        @Args('WheelSizeId')
        WheelSizeId: string, //
        @Args('updateWheelSizeInput')
        updateWheelSizeInput: UpdateWheelSizeInput,
    ) {
        return await this.WheelSizeService.update({
            WheelSizeId,
            updateWheelSizeInput,
        }); //
    }
}
