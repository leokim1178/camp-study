import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarMyCar } from '../carMyCar/entities/carMyCar.entity';
import { CarImgResolver } from './carImg.resolver';
import { CarImgService } from './carImg.service';
import { CarImg } from './entities/carImg.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CarImg, CarMyCar])],
    providers: [CarImgResolver, CarImgService],
})
export class CarImgModule {}
