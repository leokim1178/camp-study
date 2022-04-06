import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Model } from './entities/model.entity';
import { ModelResolver } from './color.resolver';
import { ModelService } from './color.service';

@Module({
    imports: [TypeOrmModule.forFeature([Model])],
    providers: [
        ModelService, //여기에 의존성 주입
        ModelResolver,
    ],
})
export class ModelModule {}
