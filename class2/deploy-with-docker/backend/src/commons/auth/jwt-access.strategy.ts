import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //이렇게 자주 쓰이는 것들이 이미 만들어져 있다
            secretOrKey: process.env.ACCESS_TOKEN_KEY
        });
    }

    validate(payload) {
        console.log(payload);
        return {
            id: payload.sub,
            email: payload.email,
            //이 두가지는 context안 request 안에 유저안에 id랑 이메일을 첨부되었다
        };
    }
}
