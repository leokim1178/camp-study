import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModelDetailResolver } from './CarModelDetail.resolver';
import { CarModelDetailService } from './CarModelDetail.service';
import { CarModelDetail } from './entities/carModelDetail.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CarModelDetail])],
    providers: [
        CarModelDetailResolver, //
        CarModelDetailService,
    ],
})
export class CarModelDetailModule {}
