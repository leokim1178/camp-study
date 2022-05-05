import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { BoardService } from './boards.service';
import { CreateBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entity';

@Resolver()
export class BoardResolver {
    constructor(private readonly boardService: BoardService) {}

    @Query(() => [Board])
    fetchBoards() {
        console.log("🚀 Jmeter!! 🚀")
        return this.boardService.findAll();
    }

    @Mutation(() => String)
    createBoard(
        @Args('writer') writer: string,
        @Args('title') title: string,
        @Args('contents') contents: string, //input 타입은 따로 만들어줘야 한다
        @Args('createBoardInput') createBoardInput: CreateBoardInput,
    ) {
        console.log(writer);
        console.log(title);
        console.log(contents);
        console.log(createBoardInput);
        return this.boardService.create();
    }
}
