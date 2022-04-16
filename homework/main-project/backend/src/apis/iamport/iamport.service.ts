import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IamportService {
    async getPaymentData({ accessToken, impUid }) {
        const response = await axios({
            url: `https://api.iamport.kr/payments/${impUid}`, // imp_uid 전달
            method: 'get', // GET method
            headers: { Authorization: accessToken }, // 인증 토큰 Authorization header에 추가
        });
        return response.data.response;
    }

    async getIamportToken() {
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

    async cancelPay({
        accessToken,
        cancelReason,
        impUid,
        cancelRequestAmount,
    }) {
        const response = await axios({
            url: 'https://api.iamport.kr/payments/cancel',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                Authorization: accessToken, // 아임포트 서버로부터 발급받은 엑세스 토큰
            },
            data: {
                reason: cancelReason, // 가맹점 클라이언트로부터 받은 환불사유
                imp_uid: impUid, // imp_uid를 환불 `unique key`로 입력
                amount: cancelRequestAmount, // 가맹점 클라이언트로부터 받은 환불금액
            },
        });

        return response.data.response;
    }
}
