import { UseGuards } from '@nestjs/common';
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
    createPayment(
        @Args('impUid') impUid: string,
        @Args('amount') amount: number,
        @CurrentUser() currentUser: ICurrentUser,
    ) {
        console.log('11111@@@@@@@@', impUid);
        return this.paymentService.create({
            impUid,
            amount,
            currentUser,
        });
    }
}
