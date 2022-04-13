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
        console.log(req);
        //1. 가입확인
        let user = await this.userService.findOne({ email: req.user.email });
        // const hashedPW = //
        //     await bcrypt.hash(req.user.password, 10).then((res) => res);
        //2. 회원가입
        if (!user) {
            user = await this.userService.create({
                email: req.user.email,
                hashedPW: req.user.password,
                name: req.user.name,
                age: req.user.age, //스프레드 연산자 써도됨
            });
        }

        //3. 로그인
        //로그인 시키는 것 : access와 refresh 두개 던지기
        this.authService.setRefreshToken({ user, res });

        res.redirect(
            'http://127.0.0.1:5501/main-project/frontend/login/index.html',
        );
    }

    @Get('/login/naver')
    @UseGuards(AuthGuard('naver'))
    async loginNaver(
        @Req()
        req: Request & IOAuthUser,
        @Res()
        res: Response,
    ) {
        let user = await this.userService.findOne({
            email: req.user.email,
        });
        if (!user) {
            user = await this.userService.create({
                email: req.user.email,
                hashedPW: req.user.password,
                name: req.user.name,
                age: req.user.age,
            });
        }

        this.authService.setRefreshToken({ user, res });

        res.redirect(
            'http://localhost:5500/homework/main-project/frontend/login/index.html',
        );
    }
}
