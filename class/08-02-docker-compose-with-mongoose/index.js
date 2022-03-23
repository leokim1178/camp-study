// import { checkValidationPhone,getToken,sendTokenToSMS } from '../01-05-token-count-api-facade-import/phone.js'
// express = require('express')
import { checkValidationPhone,getToken,sendTokenToSMS } from './phone.js'
import{checkValidationEmail,getWelcomeTemplate,sendEmail} from './email.js'

import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'
import mongoose from 'mongoose'

import dotenv from 'dotenv'
import { Board } from './models/board.model.js'


dotenv.config()
const port = 3001
const app = express();
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));



app.get('/boards', async(req, res) => {
  //1. 데이터를 조회하는 로직 -> ex)DB에 접속해서 데이터 꺼내오기

   const result = await Board.find({writer:"남형진"})//꺼내올때까지 await로 기다리기
  // Board.find({writer:req.body.writer}) //쓴 사람거 불러오기
  //2.꺼내온 결과 응답 주기
  res.send(result) //응답
})


app.post('/boards', async (req, res) => {
  //1.데이터를 등록하는 로직 ->DB에 접속해서 데이터 저장하기
  //프론트엔드로부터 데이터 받아오기
  //콘솔로 찍어서 확인해보기
  
  const board=new Board({
    // writer: req.body.writer,
    // title: req.body.title,
    // contents: req.body.title
    ...req.body
  })
  await board.save()

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





app.post('/users',(req,res)=>{
  const myuser= req.body.users

  const isValid=checkValidationEmail(myuser.email)
  if(isValid){
    const welcome= getWelcomeTemplate(myuser)
  sendEmail(myuser.email,welcome)
    res.send("가입완료!")
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
// 몽고 DB 접속!!
// mongoose.connect("mongodb://아이피주소:포트번호/0tae")
mongoose.connect("mongodb://my-database:27017/0tae") //name resolution : 각각 포트포워딩할 필요없이 네이밍해서 해결
//Backend API 서버 오픈!!(리슨)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})