import axios from 'axios'
import { User } from './models/user.model.js'
import{getToday} from './utils.js'


export function checkValidationEmail(email){
    if(email.includes("@")===false || email.includes(".")===false ||email===undefined){
        console.log("이메일을 제대로 입력해주세요")
        return false
    } else{
        return true
    }
}

export function getWelcomeTemplate({name,email,personal,prefer,phone,pwd,og}){
    // const og= await User.findOne({prefer:prefer})
    return`
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!</h1>
                <hr />
                <div> 이름 : ${name} </div>
                <div> 주민등록번호 : ${personal}</div>
                <div> 가입일 : ${getToday()}</div>
                <div> 이메일 : ${email}</div>
                <div> 전화번호 : ${phone}</div>
                <div> 비밀번호 : ${pwd}</div>
                <div> 선호 사이트 : ${prefer}</div>
                <div>       타입 : ${og}</div>
                <div>       사이트명 : ${og}</div>
                <div>       사이트 소개 : ${og}</div>
                <div>       사이트 이미지 : ${og}</div>
                </body>
                </html>
        `

}

export async function sendEmail(email,welcome){
    const appKey = process.env.EMAIL_APP_KEY
    const XSecretKey=process.env.EMAIL_X_SECRET_KEY
    const sender = process.env.EMAIL_SENDER
    const result= await axios.post(`https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`,
    { 
        senderAddress: sender,
        senderName: "영태",
        title: `안녕하세요 ${email}님. 가입을 환영합니다!`,
        body: welcome,
        receiverList: [
            {
            receiveMailAddr: email,
            receiveName: email,
            receiveType: "MRT0"
        }]


    },
    {
        headers:{
        "Content-Type": "application/json;charset=UTF-8",
        "X-Secret-Key": XSecretKey}
    }
    )
console.log("전송 끝!!!")

// console.log(`${email} 이메일로 ${mytemplate}를 전송합니다`)
}

