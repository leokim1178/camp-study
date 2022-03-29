import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendEmail,
} from "./email.js";
import { getOg } from "./scrapper.js";
import { User } from "../../models/user.model.js";
import { Token } from "../../models/token.model.js";

export class UserService {
  input;
  constructor(userObj) {
    this.input = userObj;
  }
  //1. 토큰 검증
  checkToken = async () => {
    const user = this.input;
    return await Token.findOne({ phone: user.phone, isAuth: true });
  };
  //2. 유저정보 저장
  saveUserDB = async () => {
    const user = this.input;
    const Ps = user.personal.split("-");
    const secret = Ps[0] + "-".padEnd(8, "*");
    const UserDB = await new User({
      name: user.name,
      email: user.email,
      personal: secret,
      prefer: user.prefer,
      phone: user.phone,
      pwd: user.pwd,
      og: await getOg(user),
    });
    await UserDB.save();
  };
  //3. 유저에게 유저정보 메일 전송
  sendUserMail = async () => {
    const user = this.input;
    const forMail = await User.findOne({ phone: user.phone });
    const isValid = checkValidationEmail(user.email);
    if (isValid) {
      const welcome = getWelcomeTemplate(forMail);
      sendEmail(user.email, welcome);
    } else {
      console.log("이메일 확인필요");
    }
  };
}
