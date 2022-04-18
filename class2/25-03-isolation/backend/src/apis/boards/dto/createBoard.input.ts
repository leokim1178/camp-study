import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
    @Field(() => String) //graphql에서 인식시키는 방법
    writer: string;
    @Field(() => String)
    title: string;
    @Field(() => String)
    contents: string;
}
