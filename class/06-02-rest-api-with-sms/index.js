// import { checkValidationPhone,getToken,sendTokenToSMS } from '../01-05-token-count-api-facade-import/phone.js'
// express = require('express')
import { checkValidationPhone,getToken,sendTokenToSMS } from './phone.js'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'
import dotenv from 'dotenv'


dotenv.config()
const port = 3001
const app = express();
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));




app.get('/boards', (req, res) => {
  //1. 데이터를 조회하는 로직 -> ex)DB에 접속해서 데이터 꺼내오기
  const result = [
    { number: 1, writer: "철수", title : "제목입니다", contents: "내용이에요@@@" },
    { number: 2, writer: "영희",
      title : "영희제목입니다",
      contents: "영희내용이에요@@@"
    },
    { number: 3,
      writer: "훈이",
      title : "훈이제목입니다",
      contents: "훈이내용이에요@@@"
    }
  ]
  //2.꺼내온 결과 응답 주기
  res.send(result) //응답
})


app.post('/boards', (req, res) => {
  //1.데이터를 등록하는 로직 ->DB에 접속해서 데이터 저장하기
  //프론트엔드로부터 데이터 받아오기
  //콘솔로 찍어서 확인해보기
  
  //2.저장결과 알려주기!!
  res.send('등록에 성공하였습니다!!') //응답
})

app.post('/tokens/phone',(req,res) => {
  const myphone= req.body.aaa
    //1.휴대폰번호 자릿수 맞는지 확인하기
    const isValid= checkValidationPhone(myphone)
    if(isValid){    
    //2.핸드폰 토큰 6자리 만들기
    const myToken = getToken()
    //3.핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone,myToken)
    res.send("인증완료!!")
  }
  
})

// app.get('/board/:id', (req, res) => {
//   res.send('Hello World!') //응답
// })


// app.put('/boards/:id', (req, res) => {
//   res.send('Hello World!') //응답
// })

// app.delete('/boards/:id', (req, res) => {
//   res.send('Hello World!') //응답
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})