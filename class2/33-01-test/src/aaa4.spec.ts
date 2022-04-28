import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

class MockAppService {
  getHello(): string {
    return 'Hello World!';
  }
}

describe('AppController', () => {
  let appController;

  beforeEach(async () => {
    const appModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useClass: MockAppService, //Mock AppService 주입하기
        }, //DI의 장점, 테스트할때만 Mock으로 테스트한다
      ],
    }).compile();
    appController = appModule.get<AppController>(AppController);
    // appService = new AppService();
    // appController = new AppController(appService);
  });

  describe('getHello', () => {
    it('이 테스트의 검증 결과는 Hello World를 리턴해야함!', () => {
      const result = appController.getHello();
      expect(result).toBe('Hello World!');
    });
  });
});
