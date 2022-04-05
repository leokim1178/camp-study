import { Model } from 'src/apis/tesla/model/entities/model.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Interior {
    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    color: string;
    @ManyToOne(() => Model)
    model: Model;
}
