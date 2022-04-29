import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

interface IOAuthUser {
    user: Pick<User, 'email' | 'password' | 'name' | 'age'>;
}

@Controller()
export class AuthController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {}

    @Get('/login/google')
    @UseGuards(AuthGuard('google'))
    async loginGoogle(
        @Req() req: Request & IOAuthUser, //  & 는 두개를 더하는 것
        @Res() res: Response,
    ) {
        //1. 가입확인
        const user = await this.userService.findOne({ email: req.user.email });
        //2. 회원가입
        if (!user) {
            this.userService.create({
                email: req.user.email,
                hashedPassword: req.user.password,
                name: req.user.name,
                age: req.user.age, //스프레드 연산자 써도됨
            });
        }
        //3. 로그인
        //로그인 시키는 것 : access와 refresh 두개 던지기
        this.authService.setRefreshToken({ user, res });

        res.redirect(
            'http://localhost:5500/class2/21-03-login-google/frontend/social-login.html',
        );
    }
}
