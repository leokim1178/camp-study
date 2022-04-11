import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateUserInput } from './dto/updateUserInput';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { CurrentUser } from 'src/commons/auth/gql-currentUser';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth-guard';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    //전체 유저 조회
    @Query(() => [User])
    fetchUsers() {
        return this.userService.findAll();
    }

    @UseGuards(GqlAuthAccessGuard)
    @Query(() => String)
    fetch(
        @CurrentUser()
        currentUser: any,
    ) {
        console.log('fetch 실행완료');
        console.log(currentUser);
        return 'asdf';
    }

    //이메일로 유저 조회
    @Query(() => User)
    fetchUser(
        @Args('userEmail')
        userEmail: string,
    ) {
        return this.userService.findOne({ userEmail });
    }

    //유저 생성
    @Mutation(() => User)
    async createUser(
        @Args('email')
        email: string, //
        @Args('password')
        password: string,
        @Args('name')
        name: string,
        @Args('address')
        address: string,
        @Args('age')
        age: number,
    ) {
        const hashedPW = //
            await bcrypt.hash(password, 10).then((res) => res);

        return this.userService.create({
            email,
            hashedPW,
            name,
            address,
            age,
        });
    }

    //유저정보 업데이트
    @Mutation(() => User)
    updateUser(
        @Args('updateUserInput')
        updateUserInput: UpdateUserInput,
        @Args('userEmail')
        userEmail: string,
        @Args('userPassword')
        userPassword: string,
    ) {
        return this.userService.update({
            updateUserInput,
            userEmail,
            userPassword,
        });
    }
    @Mutation(() => Boolean)
    deleteUser(
        @Args('userEmail')
        userEmail: string,
        @Args('userPassword')
        userPassword: string,
    ) {
        return this.userService.delete({ userEmail, userPassword });
    }
    @Mutation(() => Boolean)
    restoreUser(
        @Args('userEmail')
        userEmail: string,
        @Args('userPassword')
        userPassword: string,
    ) {
        return this.userService.restore({ userEmail, userPassword });
    }
}
