import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

import { UserController } from "./controllers/user.controller.js"
import { UsersController } from "./controllers/users.controller.js";



import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";


import dotenv from "dotenv";
import { Token } from "./models/token.model.js";
import { User } from "./models/user.model.js";
import { Starbucks } from "./models/starbucks.model.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
dotenv.config();

//회원 가입 API: POST /user
const userController = new UserController()
app.post("/user/", userController.postUser);

//회원 목록 조회 API: GET /users
const usersController = new UsersController()
app.get("/users", usersController.getUsers);

//토큰 인증 요청 API: POST /tokens/phone
app.post("/tokens/phone", async (req, res) => {
  const myPhone = req.body.myPhone;
  //1.휴대폰번호 자릿수 맞는지 확인하기
  const isValid = checkValidationPhone(myPhone);
  if (isValid) {
    //2.핸드폰 토큰 6자리 만들기
    const myToken = getToken();
    //3.핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myPhone, myToken);
    if (await Token.findOne({ phone: myPhone })) {
      await Token.updateOne({ phone: myPhone }, { token: myToken });
    } else {
      const TokenDB = new Token({
        phone: myPhone,
        token: myToken,
        isAuth: false,
      });
      await TokenDB.save();
    }
    res.send("완료!!");
  }
});

//인증 완료 API: PATCH /tokens/phone
app.patch("/tokens/phone", async (req, res) => {
  const myPhone = req.body.myPhone;
  const myToken = req.body.myToken;
  if (await Token.findOne({ phone: myPhone })) {
    if (await Token.findOne({ token: myToken })) {
      await Token.updateOne({ token: myToken }, { isAuth: true });
      res.send(true);
      console.log("인증완료");
    } else {
      res.send(false);
      console.log("인증번호가 일치하지 않습니다");
    }
  } else {
    res.send(false);
    console.log("인증요청한 번호가 확인되지 않습니다");
  }
});

//스타벅스 커피 목록 조회API: GET /starbucks
app.get("/starbucks", async (req, res) => {
  const result = await Starbucks.find();
  res.send(result);
});

// 몽고 DB 접속!!
// mongoose.connect("mongodb://아이피주소:포트번호/0tae")
mongoose.connect("mongodb://my-database:27017/0tae"); //name resolution : 각각 포트포워딩할 필요없이 네이밍해서 해결
//Backend API 서버 오픈!!(리슨)
app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`);
});
