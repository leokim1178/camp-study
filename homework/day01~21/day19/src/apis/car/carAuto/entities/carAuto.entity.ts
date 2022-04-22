import { CarModel } from '../../carModel/entities/carModel.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarAuto {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    isAuto: boolean;
    @Column()
    price: number;
    @ManyToOne(() => CarModel)
    carModel: CarModel;
}
