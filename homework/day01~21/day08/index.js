import express from 'express'
import mongoose from 'mongoose'
import { Token } from './models/token.model.js'
import { checkValidationPhone,getToken,sendTokenToSMS } from './phone.js'
import dotenv from 'dotenv'



const app = express();
app.use(express.json())
dotenv.config()
app.post('/tokens/phone',async (req,res)=>{
    
    const myphone= req.body.ppp
    //1.휴대폰번호 자릿수 맞는지 확인하기
    const isValid= checkValidationPhone(myphone)
    
    if(isValid){    
    //2.핸드폰 토큰 6자리 만들기
    const myToken = getToken()
    //3.핸드폰 번호에 토큰 전송하기

    sendTokenToSMS(myphone,myToken)
    res.send("인증완료!!")

    if(await Token.findOne({phone: myphone})){
      await Token.updateOne({phone:myphone},{token:myToken})
    }else{
        const TokenDB= new Token({
        phone: myphone,
        token: myToken,
        isAuth: false
        })
        await TokenDB.save()
        }
      
  }
})

app.patch('/tokens/phone', async(req, res) => {
  const myphone=req.body.ppp
  const myToken=req.body.ttt
  if(await Token.findOne({phone: myphone}&&{token: myToken}&&{isAuth: false})){
    console.log(await Token.findOne({phone: myphone}))
    await Token.updateOne({isAuth:false},{isAuth: true})
    res.send(true)
  }else{
  await res.send(false)
  }
});


// 몽고 DB 접속!!
// mongoose.connect("mongodb://아이피주소:포트번호/0tae")
mongoose.connect("mongodb://my-database:27017/0tae") //name resolution : 각각 포트포워딩할 필요없이 네이밍해서 해결
//Backend API 서버 오픈!!(리슨)
app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`)
})