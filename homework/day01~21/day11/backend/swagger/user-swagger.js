/**
 * @swagger
 * /user:
 *      post:
 *          summary: 유저 추가하기
 *          tags: [회원가입]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              user:          
 *                                 type: object                                              
 *                                 properties:                                              
 *                                  name:
 *                                      type: string
 *                                  email:
 *                                      type: string
 *                                  phone:
 *                                      type: string
 *                                  personal:
 *                                      type: string
 *                                  prefer:
 *                                      type: string
 *                                  pwd:
 *                                      type: string
 *          responses:
 *              200:
 *                  description: user의 _id 리턴
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: string
 *                            example: 623f17e89d3fb761d403fac9
 *              422:
 *                  description: 핸드폰 번호 인증 실패
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: string
 *                            example: "에러!!핸드폰번호가 인증되지않았습니다!"
 */