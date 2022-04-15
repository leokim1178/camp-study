import {
    ConflictException,
    UnprocessableEntityException,
    UseGuards,
} from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth-guard';
import { CurrentUser, ICurrentUser } from 'src/commons/auth/gql-currentUser';
import { Payment } from './entities/payment.entity';
import { PaymentService } from './payment.service';

@Resolver()
export class PaymentResolver {
    constructor(private readonly paymentService: PaymentService) {}

    @UseGuards(GqlAuthAccessGuard)
    @Mutation(() => Payment)
    async createPayment(
        @Args('impUid') impUid: string,
        @Args('merchantUid') merchantUid: string,
        @Args('amount') amount: number,
        @CurrentUser() currentUser: ICurrentUser,
    ) {
        const accessToken = await this.paymentService.getImportToken();
        const paymentData = await this.paymentService.getPaymentData({
            accessToken,
            impUid,
        });
        console.log(paymentData.status);
        const registerd = await this.paymentService.findById({
            merchantUid: paymentData.merchant_uid,
        });
        if (paymentData.status !== 'paid')
            throw new UnprocessableEntityException(
                '유효하지않은 아이디입니다 ',
            );
        console.log('1차 통과');
        if (registerd)
            throw new ConflictException('이미 등록된 결제정보입니다.');
        console.log('2차 통과');

        if (paymentData.amount == amount)
            return await this.paymentService.create({
                impUid,
                amount,
                currentUser,
                merchantUid,
            });
    }
}
