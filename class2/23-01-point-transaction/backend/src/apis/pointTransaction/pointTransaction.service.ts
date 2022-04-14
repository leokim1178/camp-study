import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import {
    PointTransaction,
    POINT_TRANSACTION_STATUS_ENUM,
} from './entities/pointTransaction.entity';

@Injectable()
export class PointTransactionService {
    constructor(
        @InjectRepository(PointTransaction)
        private readonly pointTransactionRepository: Repository<PointTransaction>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create({ impUid, amount, currentUser }) {
        //1. pointTransaction ㅌㅔ이블에 거래기록 1줄 생성
        console.log('1', amount);
        const pointTransaction = this.pointTransactionRepository.create({
            impUid: impUid,
            amount: amount,
            user: currentUser,
            status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
        });
        await this.pointTransactionRepository.save(pointTransaction);
        //2. 유저 돈 찾아오기
        const user = await this.userRepository.findOne({ id: currentUser.id });
        //3. 유저의 돈 업데이트
        await this.userRepository.update(
            { id: user.id },
            { point: user.point + amount },
        );
        //4.최종결과를 프론트에 돌려주기
        return pointTransaction;
    }
}
