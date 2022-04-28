import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID:
                '733838029193-cl3rhjd75kib5bm0s8ai4qnth48d711v1234123214.apps.googleusercontent.com',
            clientSecret:
                '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9q4242142144214216ltj',
            callbackURL: 'http://localhost:3000/login/google',
            scope: ['email', 'profile'],
        });
    }

    validate(accessToken: string, refreshToken: string, profile: any) {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        return {
            email: profile.emails[0].value,
            password: '1111',
            name: profile.displayName,
            age: 0,
        };
    }
}
