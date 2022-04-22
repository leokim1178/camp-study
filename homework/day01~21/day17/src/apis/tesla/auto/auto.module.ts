import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from './entities/model.entity';
import { ModelResolver } from './auto.resolver';
import { ModelService } from './auto.service';

@Module({
    imports: [TypeOrmModule.forFeature([Model])],
    providers: [
        ModelService, //여기에 의존성 주입
        ModelResolver,
    ],
})
export class ModelModule {}
