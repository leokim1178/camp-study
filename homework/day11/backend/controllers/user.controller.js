import { UserService } from "./services/user.service.js";
import {User} from '../models/user.model.js'


export class UserController{

    postUser = async(req, res) => {
        const user = req.body.user
        const userService = new UserService(user)
        const checkToken = userService.checkToken()
        if (checkToken) {
         userService.saveUserDB()
         .then(async() => userService.sendUserMail())
         .then(async()=>{
          const exId = await User.findOne({ phone: user.phone });
          console.log("완료");
          res.send(exId._id);
         })

        } else {
          res.status(422).send("에러!!핸드폰번호가 인증되지않았습니다!");
        }
      }


}