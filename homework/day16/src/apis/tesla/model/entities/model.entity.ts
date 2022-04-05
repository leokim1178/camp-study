import { Type } from 'src/apis/tesla/type/entities/type.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Model {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    model: string;
    @Column()
    range: number;
    @Column()
    speed: number;
    @Column()
    zero100: number;
    @Column()
    price: number;
    @ManyToOne(() => Type)
    type: Type;
}
