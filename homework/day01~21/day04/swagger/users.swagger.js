/**
 * @swagger
 * /users:
 *      get:
 *          summary: 유저정보 가져오기
 *          tags: [users]
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
 *                                  email:
 *	                                    type: string
 *	                                    example: aaa@gmail.com
 *                                  name:
 *	                                    type: string
 *	                                    example: 철수
 *                                  phone:
 *	                                    type: string
 *	                                    example: 01021613131
 *                                  personal:
 *	                                    type: string
 *	                                    example: 664121-1051005
 *                                  prefer:
 *                                      type: string
 *                                      example: https://naver.com
 */