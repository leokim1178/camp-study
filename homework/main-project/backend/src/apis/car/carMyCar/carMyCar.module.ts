import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModel } from '../carModel/entities/carModel.entity';
import { CarWheel } from '../carWheel/entities/carWheel.entity';
import { CarMyCarResolver } from './carMyCar.resolver';
import { CarMyCarService } from './carMyCar.service';
import { CarMyCar } from './entities/carMyCar.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CarModel,
            CarMyCar, //
            CarWheel,
        ]),
    ],
    providers: [
        CarMyCarResolver, //
        CarMyCarService,
    ],
})
export class CarMyCarModule {}
