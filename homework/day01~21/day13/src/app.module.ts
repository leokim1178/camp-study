import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { StarbucksModule } from './apis/starbucks/starbuck.module';
@Module({
    imports: [
        StarbucksModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/commons/graphql/schema.gql',
        }),
    ],
})
export class AppModule {}
