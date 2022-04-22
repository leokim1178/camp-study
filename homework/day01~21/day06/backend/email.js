import axios from 'axios'
import{getToday} from './utils.js'

export function checkValidationEmail(email){
    if(email.includes("@")===false || email.includes(".")===false ||email===undefined){
        console.log("이메일을 제대로 입력해주세요")
        return false
    } else{
        return true
    }
}

export function getWelcomeTemplate({Name,Personal,myPhone,Prefer,Email,Pwd}){
    
    return `
        <html>
            <body>
                <h1>${Name}님 가입을 환영합니다!!</h1>
                <hr />
                <div> 이름 : ${Name} </div>
                <div>전화번호: ${myPhone}</div>
                <div>좋아하는 사이트: ${Prefer}</div>
                <div style="color:red">가입일: ${getToday()}</div>
            </body>
        </html>
        `
}

export async function sendEmail(Email,welcome){
    const appKey = process.env.EMAIL_APP_KEY
    const XSecretKey=process.env.EMAIL_X_SECRET_KEY
    const sender = process.env.EMAIL_SENDER
    const result= await axios.post(`https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`,
    { 
        senderAddress: sender,
        title: "가입을 환영합니다",
        body: welcome,
        receiverList: [
            {
            receiveMailAddr: Email,
            receiveName: "조아라",
            receiveType: "MRT0"
        }]


    },
    {
        headers:{
        "Content-Type": "application/json;charset=UTF-8",
        "X-Secret-Key": XSecretKey}
    }
    )
console.log(result)
console.log("전송 끝!!!")
console.log(XSecretKey)
console.log(sender)
console.log(appKey)
// console.log(`${email} 이메일로 ${mytemplate}를 전송합니다`)
}

