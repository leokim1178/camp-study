import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductImage {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    url: string;
    @ManyToOne(() => Product)
    product: Product;
}
