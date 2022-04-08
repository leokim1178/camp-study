import { InputType, Field, Float, OmitType } from '@nestjs/graphql';
import { ProductSaleslocation } from '../entities/productSaleslocation.entity';

@InputType()
export class ProductSaleslocationInput extends OmitType(
    ProductSaleslocation,
    ['id'],
    InputType,
) {
    // @Field(() => String)
    // address: string;
    // @Field(() => String)
    // addressDetail: string;
    // @Field(() => Float)
    // lat: number;
    // @Field(() => Float)
    // lng: number;
    // @Field(() => Date)
    // meetingTime: Date; //=> 이렇게 모두 적어야 하지만, PickType 또는 OmitType 등을 활용하여 타입을 재사용 타입스크립트에도 있으며 유틸리티 타입이라고 한다
    // myColumn: string; //=> 이렇게 추가도 가능
}
