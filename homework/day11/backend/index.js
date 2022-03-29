import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

import { UserController } from "./controllers/user.controller.js"
import { UsersController } from "./controllers/users.controller.js";
import { PhoneController } from "./controllers/phone.controller.js";
import { StarbucksController } from "./controllers/starbucks.controller.js";
import dotenv from "dotenv";

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
const phoneController = new PhoneController()
app.post("/tokens/phone", phoneController.postPhone);

//인증 완료 API: PATCH /tokens/phone
app.patch("/tokens/phone", phoneController.patchPhone);

const starbucksService=new StarbucksController()
//스타벅스 커피 목록 조회API: GET /starbucks
app.get("/starbucks", starbucksService.getStarbucks);

// 몽고 DB 접속!!
// mongoose.connect("mongodb://아이피주소:포트번호/0tae")
mongoose.connect("mongodb://my-database:27017/0tae"); //name resolution : 각각 포트포워딩할 필요없이 네이밍해서 해결
//Backend API 서버 오픈!!(리슨)
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
