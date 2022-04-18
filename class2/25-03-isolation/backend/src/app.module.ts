import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';

import { BoardModule } from './apis/boards/boards.module';
import { PaymentMoudle } from './apis/payment/payment.module';
import { PointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { ProductModule } from './apis/product/product.module';
import { ProductCategoryModule } from './apis/productCategory/productCategory.module';
import { UserModule } from './apis/user/user.module';
@Module({
    imports: [
        BoardModule,
        PaymentMoudle,
        PointTransactionModule,
        ProductModule,
        ProductCategoryModule,
        UserModule,
        AuthModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/commons/graphql/schema.gql',
            context: ({ req, res }) => ({ req, res }),
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1178',
            database: 'myproject02',
            entities: [__dirname + '/apis/**/*.entity.*'],
            synchronize: true,
            logging: true,
        }),
    ],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {}
