import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarType } from './entities/carType.entity';
import { CarTypeResolver } from './carType.resolver';
import { CarTypeService } from './carType.service';

@Module({
    imports: [TypeOrmModule.forFeature([CarType])],
    providers: [
        CarTypeService, //여기에 의존성 주입
        CarTypeResolver,
    ],
})
export class CarTypeModule {}
