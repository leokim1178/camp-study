import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';
import axios from 'axios';

@Injectable()
export class PaymentService {
    constructor(
        @InjectRepository(Payment)
        private readonly paymentRepository: Repository<Payment>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

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

    async findById({ merchantUid }) {
        return await this.paymentRepository.findOne({
            where: { merchantUid: merchantUid },
        });
    }

    async getImportToken() {
        const response = await axios({
            url: 'https://api.iamport.kr/users/getToken',
            method: 'post', // POST method
            headers: { 'Content-Type': 'application/json' }, // "Content-Type": "application/json"
            data: {
                imp_key: '5900300052556101', // REST API키
                imp_secret:
                    'eae5d03fcad302eb2cd494defc184f587ae07b329882d5912378d1581ff34769a7e963846b41dc8e', // REST API Secret
            },
        });
        return response.data.response.access_token;
    }

    async getPaymentData({ accessToken, impUid }) {
        const response = await axios({
            url: `https://api.iamport.kr/payments/${impUid}`, // imp_uid 전달
            method: 'get', // GET method
            headers: { Authorization: accessToken }, // 인증 토큰 Authorization header에 추가
        });
        return response.data.response;
    }
}
