import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'accessKey',
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
