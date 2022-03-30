import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
    findAll() {
        return [
            {
                number: 1,
                productname: '아이스 카페 아메리카노',
                price: 4500,
                calorie: 10,
                fat: 0,
                protein: 1,
                sodium: 5,
                sugar: 0,
                caffeine: 150,
            },
            {
                number: 2,
                productname: '카페 라떼',
                price: 5000,
                calorie: 180,
                fat: 5,
                protein: 10,
                sodium: 115,
                sugar: 13,
                caffeine: 75,
            },
            {
                number: 3,
                productname: '스타벅스 돌체 라떼',
                price: 5900,
                calorie: 255,
                fat: 2,
                protein: 12,
                sodium: 190,
                sugar: 39,
                caffeine: 150,
            },
        ];
    }

    wellDone() {
        return '메뉴가 등록되었습니다';
    }
}
