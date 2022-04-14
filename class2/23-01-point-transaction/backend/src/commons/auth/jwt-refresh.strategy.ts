import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
    constructor() {
        super({
            //req.headers.cookie에 있는 refresthToken 골라내니
            jwtFromRequest: (req) => {
                const refreshToken = req.headers.cookie.replace(
                    'refreshToken=',
                    '',
                );
                return refreshToken;
            }, //이렇게 자주 쓰이는 것들이 이미 만들어져 있다
            secretOrKey: 'myRefreshKey',
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
