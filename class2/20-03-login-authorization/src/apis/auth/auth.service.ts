import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService, //
    ) {}

    getAccessToken({ user }) {
        return this.jwtService.sign(
            { email: user.email, sub: user.id }, //저장하고 싶은 데이터(많은 데이터를 담는 것은 좋지않다)
            {
                secret: 'myAccessKey',
                expiresIn: '1h', //1w(1주),1m(1분)
            },
        );
    }
}
