import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarAuto } from '../carAuto/entities/carAuto.entity';
import { CarModel } from '../carModel/entities/carModel.entity';
import { CarWheel } from '../carWheel/entities/carWheel.entity';
import { CarModelDetailResolver } from './carModelDetail.resolver';
import { CarModelDetailService } from './carModelDetail.service';
import { CarModelDetail } from './entities/carModelDetail.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CarModel,
            CarModelDetail, //
            CarAuto,
            CarWheel,
        ]),
    ],
    providers: [
        CarModelDetailResolver, //
        CarModelDetailService,
    ],
})
export class CarModelDetailModule {}
