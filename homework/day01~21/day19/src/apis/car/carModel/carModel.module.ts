import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModel } from './entities/carModel.entity';
import { CarModelResolver } from './carModel.resolver';
import { CarModelService } from './carModel.service';

@Module({
    imports: [TypeOrmModule.forFeature([CarModel])],
    providers: [
        CarModelService, //여기에 의존성 주입
        CarModelResolver,
    ],
})
export class CarModelModule {}
