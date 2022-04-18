import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
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
        private readonly connection: Connection,
    ) {}

    async create({ impUid, amount, currentUser }) {
        const queryRunner = await this.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        //transaction 시작!!
        try {
            //1. pointTransaction ㅌㅔ이블에 거래기록 1줄 생성

            const pointTransaction = this.pointTransactionRepository.create({
                impUid: impUid,
                amount: amount,
                user: currentUser,
                status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
            });
            // await this.pointTransactionRepository.save(pointTransaction);

            await queryRunner.manager.save(pointTransaction);
            // throw new Error('에러발쌩!!');
            //2. 유저 돈 찾아오기
            const user = await this.userRepository.findOne({
                id: currentUser.id,
            });
            // //3. 유저의 돈 업데이트
            // await this.userRepository.update(
            //     { id: user.id },
            //     { point: user.point + amount },
            // );
            const updatedUser = this.userRepository.create({
                ...user,
                point: user.point + amount,
            });
            //commit : 성공 확정!!
            await queryRunner.manager.save(updatedUser);

            await queryRunner.commitTransaction();

            //4.최종결과를 프론트에 돌려주기
            return pointTransaction;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            //rollback 되돌리기!!
        } finally {
            await queryRunner.release();
        }
    }
}
