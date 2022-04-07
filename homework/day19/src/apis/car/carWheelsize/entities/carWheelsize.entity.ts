import { CarModel } from '../../carModel/entities/carModel.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarWheelSize {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    size: number;
    @Column()
    price: number;
    @ManyToOne(() => CarModel)
    carModel: CarModel;
}
