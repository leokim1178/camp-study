import {
    HttpException,
    HttpStatus,
    Injectable,
    UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async findAll() {
        return await this.productRepository.find();
    }

    async findOne({ productId }) {
        return await this.productRepository.findOne({ id: productId });
    }

    async create({ createProductInput }) {
        const result = await this.productRepository.save({
            ...createProductInput,
            //하나하나 직접 나열하기
            // name: createProductInput.name,
            // description: createProductInput.description,
            // price: createProductInput.price,
            // isSoldout: createProductInput.isSoldout,
        }); //product를 데이터베이스에 저장
        console.log(result);
        return result;
    }

    async update({ productId, updateProductInput }) {
        const product = await this.productRepository.findOne({ id: productId });
        const newProduct = {
            ...product,
            ...updateProductInput,
            // id: product.id,
            // name: product.name,
            // price: product.price,
            // description: product.description,
            // description은 안 바꾸고 싶다면...description:updateProductInput.description이 들어가야 되는것이다 그런데 객체 특성상 위에서부터 아래로 내려가는 동안 같은 키에 입력값이 들어가면 아래에 있는 밸류로 덮어쓰기 된다
            // isSoldout: product.isSoldout,
        };
        return await this.productRepository.save(newProduct); //id가 있다면 id를 바탕으로 수정하기가 작동한다
    }
    async checkSoldout(productId) {
        const product = await this.productRepository.findOne({ id: productId });
        if (product.isSoldout)
            throw new UnprocessableEntityException(
                '이미 판매가 완료된 상품입니다.',
            );
        // if (product.isSoldout) {
        //     throw new HttpException(
        //         '이미 판매가 완료된 상품입니다.',
        //         HttpStatus.UNPROCESSABLE_ENTITY,
        //     ); //예외처리
        // }
        // try-catch-finally, exceptionfilter
    }
}
