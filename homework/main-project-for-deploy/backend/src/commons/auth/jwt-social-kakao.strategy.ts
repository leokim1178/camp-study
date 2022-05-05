import { Strategy } from 'passport-kakao';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
    constructor() {
        const kakaoClientID = process.env.KAKAO_CLIENT_ID;
        const kakaoClientSecret = process.env.KAKAO_CLIENT_SECRET;
        super({
            clientID: kakaoClientID,
            clientSecret: kakaoClientSecret,
            callbackURL: 'http://localhost:3000/login/kakao',
            // scope: ['email', 'profile'],
        });
    }

    validate(accessToken: string, refreshToken: string, profile: any) {
        console.log('1/////', accessToken);
        console.log('2/////', refreshToken);

        return {
            email: profile._json.kakao_account.email,
            password: '1111',
            name: profile.displayName,
            age: profile._json.kakao_account.age_range,
        };
    }
}
