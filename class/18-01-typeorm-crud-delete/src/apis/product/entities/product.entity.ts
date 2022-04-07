import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productCategory/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/apis/productSaleslocation/entities/productSaleslocation.entity';
import { ProductTag } from 'src/apis/productTag/entities/productTag.entity';
import { User } from 'src/apis/user/entities/user.entity';
import {
    Column,
    DeleteDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity() //Entity라는 함수 안에 내부를 table로 만들어주는 기능이 내장되어 있다
@ObjectType()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => String)
    description: string;

    @Column()
    @Field(() => Int)
    price: number;

    @Column({ default: false })
    @Field(() => Boolean)
    isSoldout: boolean;
    // soldAt: Date;

    // @Column({ default: false })
    // @Field(() => Boolean)
    // isDeleted: boolean;

    // @Column({ default: null })
    // @Field(() => Date)
    // deletedAt: Date;
    @DeleteDateColumn() //
    deletedAt: Date;

    @JoinColumn() //컬럼을 가지고 연결하겠다는 뜻... 기준이 있는곳에 이걸 둔다
    @OneToOne(() => ProductSaleslocation) // 일대일 관계 괄호안에 함수가 들어감
    @Field(() => ProductSaleslocation)
    productSaleslocation: ProductSaleslocation;

    @ManyToOne(() => ProductCategory) //다대일관계
    //이것이 디폴트이며 이것이 기준이고 중심이다
    //Manytoone 없이 onetomany는 있을 수 없다
    @Field(() => ProductCategory)
    productCategory: ProductCategory;
    @ManyToOne(() => User)
    @Field(() => User)
    user: User;

    @JoinTable()
    @ManyToMany(() => ProductTag, (productTags) => productTags.product)
    @Field(() => [ProductTag])
    productTags: ProductTag[];
}
