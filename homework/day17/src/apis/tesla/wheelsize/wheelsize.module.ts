import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WheelSize } from './entities/WheelSize.entity';
import { WheelSizeResolver } from './wheelsize.resolver';
import { WheelSizeService } from './wheelsize.service';

@Module({
    imports: [TypeOrmModule.forFeature([WheelSize])],
    providers: [
        WheelSizeService, //여기에 의존성 주입
        WheelSizeResolver,
    ],
})
export class WheelSizeModule {}
