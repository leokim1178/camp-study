import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
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
        }),
    ],
})
export class AppModule {}
