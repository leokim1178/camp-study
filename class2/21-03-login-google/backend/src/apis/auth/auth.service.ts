import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService, //
    ) {}

    setRefreshToken({ user, res }) {
        const refreshToken = this.jwtService.sign(
            { email: user.email, sub: user.id },
            {
                secret: 'myRefreshKey',
                expiresIn: '2w',
            },
        );

        //개발환경
        res.setHeader('Set-Cookie', `refreshToken=${refreshToken}`);

        // 배포환경
        // res.setHeader('Access-Control-Allow-Origin', 'https://myfrontsite.com')
        // res.setHeader(
        //   'Set-Cookie',
        //   `refreshToken=${refreshToken}; path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly;`
        // )
    }

    getAccessToken({ user }) {
        return this.jwtService.sign(
            { email: user.email, sub: user.id }, //저장하고 싶은 데이터(많은 데이터를 담는 것은 좋지않다)
            {
                secret: 'myAccessKey',
                expiresIn: '10s', //1w(1주),1m(1분)
            },
        );
    }
}
