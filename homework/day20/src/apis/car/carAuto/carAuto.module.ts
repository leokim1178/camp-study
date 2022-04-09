import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarAutoResolver } from './carAuto.resolver';
import { CarAutoService } from './carAuto.service';
import { CarAuto } from './entities/carAuto.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CarAuto])],
    providers: [
        CarAutoResolver, //
        CarAutoService,
    ],
})
export class CarAutoModule {}
