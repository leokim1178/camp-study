import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //Entity라는 함수 안에 내부를 table로 만들어주는 기능이 내장되어 있다
export class ProductCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    name: string;
}
