/**
 * @swagger
 * /starbucks:
 *      get:
 *          summary: 커피메뉴 가져오기
 *          tags: [starbucks]
 *          parameters:
 *              - in: query
 *                name: number
 *                type: int
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                  name:
 *	                                    type: string
 *	                                    example: 아메리카노
 *                                  writer:
 *	                                    type: int
 *	                                    example: 5
 */