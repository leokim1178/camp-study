import { UnprocessableEntityException } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService, //
        private readonly userService: UserService,
    ) {}

    @Mutation(() => String)
    async login(
        @Args('email') //
        userEmail: string,
        @Args('password')
        password: string,
    ) {
        //1. 로그인(이메일과 비밀번호가 일치하는 유저 찾기)
        const user = await this.userService.findOne({ userEmail });
        //2. 일치하는 유저가 없으면? 에러 던지기
        if (!user)
            throw new UnprocessableEntityException(
                '해당 이메일이 존재하지 않습니다',
            );

        //3. 일치하는 유저가 있지만, 암호가 틀렸다면? 에러 던지기
        const isAuth = await bcrypt.compare(password, user.password);
        if (!isAuth)
            throw new UnprocessableEntityException('패스워드가 틀렸습니다.');
        //4. 일치하는 유저가 있으면? 그 유저를 위한  accessToken(JWT)을 준비
        return this.authService.getAccessToken({ user });
    }
}
