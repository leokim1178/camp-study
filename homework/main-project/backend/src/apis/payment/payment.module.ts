import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Payment } from './entities/payment.entity';
import { PaymentResolver } from './payment.resolver';
import { PaymentService } from './payment.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User, //
            Payment,
        ]),
    ],
    providers: [PaymentService, PaymentResolver],
})
export class PaymentModule {}
