import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { Token } from './models/token.model.js'
import { Starbucks } from './models/starbucks.model.js'
import { User } from './models/user.model.js'
import { checkValidationPhone,getToken,sendTokenToSMS } from './phone.js'
import dotenv from 'dotenv'
import { getOg } from './webcrawler.js'
import { checkValidationEmail,getWelcomeTemplate,sendEmail } from './email.js'

const app = express();
app.use(cors())
app.use(express.json())
dotenv.config()

//회원 가입 API: POST /user
app.post('/user/',async (req,res)=>{
  const user = req.body.user
  const Og= await getOg(user)
  let Ps= user.personal.split("-")
  const secret=Ps[0]+"-".padEnd(8,"*")
  if(await Token.findOne({phone:user.phone}&&{isAuth:true})){
    const UserDB= await new User({
        name : user.name,
        email : user.email,
        personal : secret,
        prefer: user.prefer, 
        phone : user.phone,
        pwd: user.pwd,
        og: Og
    })
    await UserDB.save().then((req)=>{
      // const user= req.body.user
      const isValid=checkValidationEmail(user.email)
      if(isValid){
        const welcome= getWelcomeTemplate(user)
        sendEmail(user.email,welcome)

    }else{
      res.send("이메일 확인필요")
    }})
    const exId=  await User.findOne({phone:user.phone})
    res.send(exId._id)
    console.log("완료")
  }else{
    res.status(422).send("에러!!핸드폰번호가 인증되지않았습니다!")
  }

})


//회원 목록 조회 API: GET /users
app.get('/users',async(req,res)=>{
  const result =await User.findOne({token:req.body.token})
  res.send(result)
})



//토큰 인증 요청 API: POST /tokens/phone
app.post('/tokens/phone',async (req,res)=>{
    const myphone= req.body.myPhone
    //1.휴대폰번호 자릿수 맞는지 확인하기
    const isValid= checkValidationPhone(myphone)
    if(isValid){    
    //2.핸드폰 토큰 6자리 만들기
    const myToken = getToken()
    //3.핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone,myToken)
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
    await res.send("완료!!")
  }
})
//인증 완료 API: PATCH /tokens/phone 
app.patch('/tokens/phone', async(req, res) => {
  const myphone=req.body.myPhone
  const myToken=req.body.myToken
  if(await Token.findOne({phone:myphone})){
    if(await Token.findOne({token:myToken})){
      await Token.updateOne({token :myToken},{isAuth: true})
      await res.send(true)
      console.log("인증완료")
    }else{
      res.send(false)
      console.log("인증번호가 일치하지 않습니다")
    }
  }else{
    res.send(false)
    console.log("인증요청한 번호가 확인되지 않습니다")
  }
});


//스타벅스 커피 목록 조회API: GET /starbucks 
app.get('/starbucks',(req,res)=>{
  
})

// 몽고 DB 접속!!
// mongoose.connect("mongodb://아이피주소:포트번호/0tae")
mongoose.connect("mongodb://my-database:27017/0tae") //name resolution : 각각 포트포워딩할 필요없이 네이밍해서 해결
//Backend API 서버 오픈!!(리슨)
app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`)
})