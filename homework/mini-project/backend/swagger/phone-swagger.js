/**
 * @swagger
 * /tokens/phone:
 *      post:
 *          summary: 토큰 인증 요청
 *          tags: [토큰 인증]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              myPhone:
 *                                  type: string
 *          responses:
 *              200:
 *                  description: 토큰 인증 요청 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: string
 *                            example: 완료!!
 */

/**
 * @swagger
 * /tokens/phone:
 *       patch:
 *          summary: 토큰 인증 완료
 *          tags: [토큰 인증]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              myPhone:
 *                                  type: string
 *                              myToken:
 *                                  type: string
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *	                                    type: boolean
 *	                                    example: true
 */
