/**
 * @swagger
 * /users:
 *      get:
 *          summary: 회원 목록 조회
 *          tags: [회원조회]
 *          responses:
 *              200:
 *                  description: 회원정보
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                  user:
 *	                                    type: String
 *	                                    example: 철수
 *                                  email:
 *	                                    type: string
 *	                                    example: chulsoo@naver.com
 *                                  phone:
 *	                                    type: string
 *	                                    example: 010-1234-5678
 *                                  personal:
 *	                                    type: string
 *	                                    example: 990101-1023564
 *                                  prefer:
 *	                                    type: string
 *	                                    example: google.com
 *                                  pwd:
 *	                                    type: string
 *	                                    example: 123456
 *                                  og:
 *	                                    type: Object
 *	                                    example: { }
 */