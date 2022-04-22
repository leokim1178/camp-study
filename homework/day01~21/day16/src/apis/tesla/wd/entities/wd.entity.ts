import { Model } from 'src/apis/tesla/model/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wd {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    wd: string;
    @ManyToOne(() => Model)
    model: Model;
}
