import { ConflictException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { UserService } from '../user.service';

class MockUserRepository {
    myDB = [{ email: 'a@a.com', password: '0000', name: '짱구', age: 8 }];
    findOne({ email }) {
        const users = this.myDB.filter((el) => el === email);
        if (users.length) {
            return users[0];
        }
        return null;
    }

    save({ email, password, name, age }) {
        this.myDB.push({ email, password, name, age });
        return { email, password, name, age };
    }
}
type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

//keyof는 뭐냐면
// const IProfile = {
//     name: '철수',
//     age: 13,
// };
// const qqq: keyof IProfile;
// const qqq: "name"|| "age"

describe('UserService', () => {
    let userService: UserService;
    let userRepository: MockRepository<User>;
    beforeEach(async () => {
        const userModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: getRepositoryToken(User),
                    useClass: MockUserRepository,
                },
            ],
        }).compile();
        userService = userModule.get<UserService>(UserService);
        userRepository = userModule.get<MockRepository<User>>(
            getRepositoryToken(User),
        );
    });
    describe('create', () => {
        it('이미 존재하는 이메일 검증하기!!', async () => {
            const userRepositorySpyFindOne = jest.spyOn(
                userRepository,
                'findOne',
            );
            const userRepositorySpySave = jest.spyOn(userRepository, 'save');
            const myData = {
                email: 'a@a.com',
                hashedPassword: '1234',
                name: '철수',
                age: 13,
            };
            try {
                await userService.create({ ...myData });
            } catch (error) {
                expect(error).toBeInstanceOf(ConflictException);
            }
            expect(userRepositorySpyFindOne).toBeCalledTimes(1);
            expect(userRepositorySpySave).toBeCalledTimes(0);
        });
        it('회원 등록이 잘 되었는지 검증!!', async () => {
            const userRepositorySpyFindOne = jest.spyOn(
                userRepository,
                'findOne',
            );
            const userRepositorySpySave = jest.spyOn(userRepository, 'save');
            const myData = {
                email: 'bbb@bbb.com',
                hashedPassword: '1234',
                name: '철수',
                age: 13,
            };

            const myResultData = {
                email: 'bbb@bbb.com',
                password: '1234',
                name: '철수',
                age: 13,
            };

            const result = await userService.create({ ...myData });
            expect(result).toStrictEqual(myResultData);
            expect(userRepositorySpyFindOne).toBeCalledTimes(1);
            expect(userRepositorySpySave).toBeCalledTimes(1);
        });
    });
});
