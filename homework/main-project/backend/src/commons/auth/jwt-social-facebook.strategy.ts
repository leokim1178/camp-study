import { Strategy } from 'passport-facebook';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtFacebookStrategy extends PassportStrategy(
    Strategy,
    'facebook',
) {
    constructor() {
        super({
            clientID: 'L73gLRlKOELoHqgF8J0V',
            clientSecret: 'Y_RIkOCU8s',
            callbackURL: 'http://localhost:3000/login/naver',
            // scope: ['email', 'profile'],
        });
    }

    validate(accessToken: string, refreshToken: string, profile: any) {
        console.log('1/////', accessToken);
        console.log('2/////', refreshToken);
        console.log('3/////', profile);

        return {
            email: profile.emails[0].value,
            password: '1111',
            name: profile.displayName,
            age: profile._json.age,
        };
    }
}
