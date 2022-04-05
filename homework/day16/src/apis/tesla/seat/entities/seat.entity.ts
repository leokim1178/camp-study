import { Model } from 'src/apis/tesla/model/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seat {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    size: number;
    @Column()
    canSeat: boolean;
    @ManyToOne(() => Model)
    model: Model;
}
