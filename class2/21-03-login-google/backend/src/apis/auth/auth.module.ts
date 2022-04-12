import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtRefreshStrategy } from 'src/commons/auth/jwt-refresh.strategy';
import { JwtGoogleStrategy } from 'src/commons/auth/jwt-social-google.strategy';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
    imports: [
        JwtModule.register({}), //사용 방법은 독스에 나와있음
        TypeOrmModule.forFeature([User]),
    ],
    providers: [
        UserService, //
        AuthResolver,
        AuthService,
        JwtRefreshStrategy,
        JwtGoogleStrategy,
        AuthController,
    ],
})
export class AuthModule {}
