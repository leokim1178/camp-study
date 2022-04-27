import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'bbb' })
  fetchBoards() {
    return 'fetchBoards 게시글 데이터 보내주기';
  }
}
