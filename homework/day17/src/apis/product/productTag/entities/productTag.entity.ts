import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class ProductTag {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    tagname: string;
    @ManyToMany(() => Product, (products) => products.productTag)
    product: Product[];
}
