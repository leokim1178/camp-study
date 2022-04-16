import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private readonly paymentRepository: Repository<Payment>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    //결제정보 생성 및 저장
    async create({ impUid, amount, currentUser, merchantUid }) {
        //1. Payment ㅌㅔ이블에 거래기록 1줄 생성

        const payment = this.paymentRepository.create({
            impUid: impUid,
            amount: amount,
            user: currentUser,
            merchantUid: merchantUid,
            status: PAYMENT_STATUS_ENUM.PAYMENT,
        });
        await this.paymentRepository.save(payment);
        //2. 유저 돈 찾아오기
        const user = await this.userRepository.findOne({
            where: { id: currentUser.id },
        });
        //3. 유저의 돈 업데이트
        await this.userRepository.update(
            { id: user.id },
            { point: user.point + amount },
        );
        //4.최종결과를 프론트에 돌려주기
        console.log('저장완료');
        return payment;
    }

    //DB의 결제정보 조회
    async findById({ merchantUid }) {
        return await this.paymentRepository.findOne({
            where: { merchantUid: merchantUid },
        });
    }

    //결제취소정보 생성 및 DB저장
    async createPaymentCancel({
        currentUser,
        amount,
        merchantUid,
        cancelReason,
        impUid,
    }) {
        //1. Payment 테이블에 취소기록 1줄 생성

        const result = this.paymentRepository.create({
            impUid: impUid,
            amount: -amount,
            user: currentUser,
            merchantUid: merchantUid,
            cancelReason: cancelReason,
            status: PAYMENT_STATUS_ENUM.CANCEL,
        });
        await this.paymentRepository.save(result);

        //2. 유저 돈 찾아오기
        const user = await this.userRepository.findOne({
            where: { id: currentUser.id },
        });

        //3. 유저의 돈 업데이트
        await this.userRepository.update(
            { id: user.id },
            { point: user.point - amount },
        );
        //4. 저장 결과 돌려주기
        return result;
    }
}
