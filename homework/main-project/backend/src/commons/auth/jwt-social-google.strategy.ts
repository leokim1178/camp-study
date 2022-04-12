import { Strategy } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID:
                '493861724816-2j12rfo3ljf0koumn0tk2ser9ts3qlm9.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/login/google',
            scope: ['email', 'profile'],
        });
    }

    validate(accessToken: string, refreshToken: string, profile: any) {
        console.log(accessToken);
        console.log(refreshToken);

        return {
            email: profile.emails[0].value,
            password: '1111',
            name: profile.displayName,
            age: 0,
        };
    }
}
