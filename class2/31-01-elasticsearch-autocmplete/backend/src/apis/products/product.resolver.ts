import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
    constructor(
        private readonly productService: ProductService, //

        private readonly elasticsearchService: ElasticsearchService,
    ) {}

    @Query(() => [Product])
    async fetchProducts(
        @Args('search')
        search: string,
    ) {
        // // 엘라스틱서치에서 조회 연습하기! => 연습일뿐...실제로는 mysql에서 조회할 예정!!
        const result = await this.elasticsearchService.search({
            index: 'myproduct0222',
            query: {
                match: {
                    description: search,
                }, //myproduct 안에 있는 모든걸 가져온다
            },
        });

        console.log(JSON.stringify(result, null, '   ')); //이거 꿀팁
        // // 엘라스틱서치에서 조회해보기 위해 임시로 주석!!
        // return this.productService.findAll();
        // column 형식에 적합하면 sql에 저장... 주소,글 같이 부분적으로 검색해야하면 elastic search
    }

    @Query(() => Product)
    fetchProduct(
        @Args('productId') productId: string, //
    ) {
        return this.productService.findOne({ productId });
    }

    @Mutation(() => Product)
    createProduct(
        @Args('createProductInput') createProductInput: CreateProductInput,
    ) {
        return this.productService.create({ createProductInput });

        // 엘라스틱서치에서 등록 연습하기! => 연습일뿐...실제로는 mysql에 저장할 예정!!

        // this.elasticsearchService.create({
        //     id: 'myid',
        //     index: 'myproduct',
        //     document: {
        //         //스키마 개념이 없어서 아무거나 넣으면 그냥 들어감
        //         name: '철수',
        //         age: 13,
        //         school: '다람쥐초등학교',
        //     },
        // });
        // 엘라스틱서치에서 등록해보기 위해 임시로 주석!!
    }

    @Mutation(() => Product)
    async updateProduct(
        @Args('productId') productId: string,
        @Args('updateProductInput') updateProductInput: UpdateProductInput,
    ) {
        // 판매 완료가 되었는지 확인해보기
        await this.productService.checkSoldout({ productId });

        // 수정하기
        return await this.productService.update({
            productId,
            updateProductInput,
        });
    }

    @Mutation(() => Boolean)
    deleteProduct(
        @Args('productId') productId: string, //
    ) {
        return this.productService.delete({ productId });
    }
}
