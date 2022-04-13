import { Strategy } from 'passport-kakao';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
    constructor() {
        super({
            clientID: 'a9580d85ebc36dab0612fecf60ea7270',
            clientSecret: 'Sz1JLIGy4nV9uNTFiUkmHOUOdG7fXnn4',
            callbackURL: 'http://localhost:3000/login/kakao',
            // scope: ['email', 'profile'],
        });
    }

    validate(accessToken: string, refreshToken: string, profile: any) {
        console.log('1/////', accessToken);
        console.log('2/////', refreshToken);
        console.log('3/////', profile);

        return {
            email: profile._json.kakao_account.email,
            password: '1111',
            name: profile.displayName,
            age: profile._json.kakao_account.age_range,
        };
    }
}
