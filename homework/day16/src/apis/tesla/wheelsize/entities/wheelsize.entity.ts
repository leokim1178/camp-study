import { Model } from 'src/apis/tesla/model/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Color {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    size: number;
    @Column()
    price: number;
    @ManyToOne(() => Model)
    model: Model;
}
