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

    async create({ impUid, amount, currentUser }) {
        //1. Payment ㅌㅔ이블에 거래기록 1줄 생성
        console.log('1', amount);
        const payment = this.paymentRepository.create({
            impUid: impUid,
            amount: amount,
            user: currentUser,
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
        return payment;
    }
}
