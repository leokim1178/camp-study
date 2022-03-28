import {checkValidationEmail,getWelcomeTemplate,sendEmail} from './email.js'
import {getOg} from './scrapper.js'
import { User } from '../../models/user.model.js'
import { Token } from '../../models/token.model.js'



export  class UserService{
  user
  constructor(userObj){
    this.user = userObj
  }
    checkToken = async()=>{
        return await Token.findOne({ phone: this.user.phone,isAuth: true })
    }

    saveUserDB=async()=>{
      const Ps = this.user.personal.split("-");
      const secret = Ps[0] + "-".padEnd(8, "*");
        const UserDB = await new User({
            name: this.user.name,
            email: this.user.email,
            personal: secret,
            prefer: this.user.prefer,
            phone: this.user.phone,
            pwd: this.user.pwd,
            og: await getOg(this.user),
          });
          await UserDB.save()
    }

    sendUserMail=async() => {
        const forMail = await User.findOne({ phone: this.user.phone });
        const isValid = checkValidationEmail(this.user.email);
        if (isValid) {
          const welcome = getWelcomeTemplate(forMail);
          sendEmail(this.user.email, welcome);
        } else {
          console.log("이메일 확인필요");
        }
      }
    

    }