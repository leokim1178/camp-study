import { UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { GqlAuthRefreshGuard } from 'src/commons/auth/gql-auth-guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-currentUser';

@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService, //
        private readonly userService: UserService,
    ) {}

    @Mutation(() => String)
    async login(
        @Args('email') //
        email: string,
        @Args('password')
        password: string,
        @Context()
        context: any,
    ) {
        //1. 로그인(이메일과 비밀번호가 일치하는 유저 찾기)
        const user = await this.userService.findOne({ email });
        //2. 일치하는 유저가 없으면? 에러 던지기
        if (!user)
            throw new UnprocessableEntityException(
                '해당 이메일이 존재하지 않습니다',
            );

        //3. 일치하는 유저가 있지만, 암호가 틀렸다면? 에러 던지기
        const isAuth = await bcrypt.compare(password, user.password);
        if (!isAuth)
            throw new UnprocessableEntityException('패스워드가 틀렸습니다.');

        //4. refreshToken(=JWT)을 만들어서 프론트엔드(쿠키)에 보내주기
        this.authService.setRefreshToken({ user, res: context.res });

        //4. 일치하는 유저가 있으면? 그 유저를 위한  accessToken(JWT)을 준비
        return this.authService.getAccessToken({ user });
    }

    @UseGuards(GqlAuthRefreshGuard)
    @Mutation(() => String)
    restoreAccessToken(
        @CurrentUser()
        currentUser: ICurrentUser,
    ) {
        return this.authService.getAccessToken({ user: currentUser });
    }
}
