import { Model } from 'src/apis/tesla/model/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auto {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    isAuto: boolean;
    @Column()
    price: number;
    @ManyToOne(() => Model)
    model: Model;
}
