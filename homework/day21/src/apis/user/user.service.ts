import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}
    //전체 유저 조회
    async findAll() {
        return await this.userRepository.find({
            withDeleted: true, //
        });
    }
    //이메일로 유저 조회
    async findOne({ userEmail }) {
        return await this.userRepository.findOne({
            where: {
                email: userEmail,
            },
            withDeleted: true,
        });
    }

    //유저 생성
    async create({ email, name, address, age, hashedPW: password }) {
        const user = await this.userRepository.findOne({
            where: { email },
        });
        if (user) throw new ConflictException('이미 등록된 이메일입니다'); //409번

        return await this.userRepository.save({
            email,
            password,
            name,
            address,
            age,
        });
    }

    //유저정보 업데이트
    async update({ updateUserInput, userEmail, userPassword }) {
        const prevUser = await this.userRepository.findOne({
            where: { email: userEmail },
        });
        if (prevUser.password == userPassword)
            return await this.userRepository.save({
                prevUser,
                ...updateUserInput,
            });
        else throw new ConflictException('비밀번호가 일치하지 않습니다');
    }

    //유저정보 삭제(softDelete)
    async delete({ userEmail, userPassword }) {
        const findUser = await this.userRepository.findOne({
            where: { email: userEmail },
        });
        if (findUser.password == userPassword) {
            const result = await this.userRepository.softDelete({
                email: userEmail,
            });
            return result.affected ? true : false;
        } else throw new ConflictException('비밀번호가 일치하지 않습니다!');
    }

    //유저정보 복구
    async restore({ userEmail, userPassword }) {
        const findUser = await this.userRepository.findOne({
            where: { email: userEmail },
            withDeleted: true,
        });
        if (findUser.deletedAt && findUser.password == userPassword) {
            const result = await this.userRepository.restore({
                email: userEmail,
            });
            return result.affected ? true : false;
        }
    }
}
