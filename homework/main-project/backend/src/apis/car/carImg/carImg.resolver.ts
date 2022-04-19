import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CarImgService } from './carImg.service';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { CarImg } from './entities/carImg.entity';

@Resolver()
export class CarImgResolver {
    constructor(private readonly carImgService: CarImgService) {}

    @Mutation(() => [String])
    uploadImg(
        @Args({ name: 'imgs', type: () => [GraphQLUpload] })
        imgs: FileUpload[],
    ) {
        return this.carImgService.upload({ imgs });
    }

    @Mutation(() => CarImg)
    createImg(
        @Args('myCarId')
        myCarId: string,
        @Args('imgURL')
        imgURL: string,
    ) {
        return this.carImgService.saveImg({ myCarId, imgURL });
    }

    @Mutation(() => CarImg)
    updateImg(
        @Args('myCarId')
        myCarId: string,
        @Args('imgURL')
        imgURL: string,
    ) {
        return this.carImgService.updateImg({ myCarId, imgURL });
    }
}
