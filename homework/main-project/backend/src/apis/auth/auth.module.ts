import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
    GqlAuthAccessGuard,
    GqlAuthRefreshGuard,
} from 'src/commons/auth/gql-auth-guard';
import { JwtRefreshStrategy } from 'src/commons/auth/jwt-refresh-strategy';
import { JwtGoogleStrategy } from 'src/commons/auth/jwt-social-google.strategy';
import { JwtKakaoStrategy } from 'src/commons/auth/jwt-social-kakao.strategy';
import { JwtNaverStrategy } from 'src/commons/auth/jwt-social-naver.strategy';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
    imports: [
        JwtModule.register({}), //
        TypeOrmModule.forFeature([User]),
    ],
    providers: [
        AuthService, //
        AuthResolver,
        UserService,
        JwtRefreshStrategy,
        JwtGoogleStrategy,
        JwtNaverStrategy,
        JwtKakaoStrategy,
        GqlAuthAccessGuard,
        GqlAuthRefreshGuard,
    ],
    controllers: [AuthController],
})
export class AuthModule {}
