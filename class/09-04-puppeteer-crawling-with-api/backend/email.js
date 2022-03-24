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

export function getWelcomeTemplate({name,age,school,email,password}){
    
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!</h1>
                <hr />
                <div> 이름 : ${name} </div>
                <div> 나이 : ${age}</div>
                <div> 학교 : ${school}</div>
                <div>가입일: ${getToday()}</div>
                <div>이메일: ${email}</div>
                <div>비밀번호: ${password}</div>
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
        title: "안녕하세요 철수님. 가입을 환영합니다!",
        body: welcome,
        receiverList: [
            {
            receiveMailAddr: email,
            receiveName: "철수",
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

