import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUserInput';
import { UpdateUserInput } from './dto/updateUserInput';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    //전체 유저 조회
    @Query(() => [User])
    fetchUsers() {
        return this.userService.findAll();
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
    createUser(
        @Args('createUserInput')
        createUserInput: CreateUserInput,
    ) {
        return this.userService.create({
            createUserInput, //
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
