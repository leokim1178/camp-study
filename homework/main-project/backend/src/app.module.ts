import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarModelModule } from './apis/car/carModel/carModel.module';
import { CarTypeModule } from './apis/car/carType/carType.module';

import { UserModule } from './apis/user/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { PaymentModule } from './apis/payment/payment.module';
import { CarMyCarModule } from './apis/car/carMyCar/carMyCar.module';
import { CarWheelModule } from './apis/car/carWheel/carWheel.module';

@Module({
    imports: [
        CarModelModule,
        CarMyCarModule,
        CarTypeModule,
        CarWheelModule,
        //==========CarModules=======//
        AuthModule,
        PaymentModule,
        UserModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/commons/graphql/schema.gql',
            context: ({ req, res }) => ({ req, res }),
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'my-database',
            port: 3306,
            username: 'root',
            password: '1178',
            database: 'mydocker02',
            entities: [__dirname + '/apis/**/**/*.entity.*'],
            synchronize: true,
            logging: true,
            retryAttempts: 30,
            retryDelay: 5000,
        }),
    ],
})
export class AppModule {}
