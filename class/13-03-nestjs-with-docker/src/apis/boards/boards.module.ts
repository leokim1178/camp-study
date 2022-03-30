import { Module } from '@nestjs/common';
import { BoardService } from './boards.service';
import { BoardResolver } from './boards.resolver';

@Module({
    providers: [BoardService, BoardResolver],
})
export class BoardModule {}
