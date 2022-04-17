import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarWheelResolver } from './carWheel.resolver';
import { CarWheelService } from './carWheel.service';
import { CarWheel } from './entities/carWheel.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CarWheel])],
    providers: [CarWheelResolver, CarWheelService],
})
export class CarWheelModule {}
