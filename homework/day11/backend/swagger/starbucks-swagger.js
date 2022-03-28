/**
 * @swagger
 * /starbucks:
 *      get:
 *          summary: 스타벅스 커피 목록 조회
 *          tags: [스타벅스]
 *          responses:
 *              200:
 *                  description: 스타벅스 메뉴정보와 이미지정보
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                  name:
 *	                                    type: string
 *	                                    example: 나이트로 바닐라 크림
 *                                  img:
 *	                                    type: string
 *	                                    example: https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg
 */