import { Resolver, Mutation, Query } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  aaa() {
    return '끝났다';
  }

  @Mutation(() => String)
  login() {
    return 'login 성공!';
  }
}
