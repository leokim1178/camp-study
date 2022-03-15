import{checkValidationEmail,getWelcomeTemplate,sendEmail} from './email.js'




function createUser(user){
    //1.이메일이 정상인지 확인(1:이메일이 존재하는지? 2:@가 포함되어있는지?)
    const isValid=checkValidationEmail(user)
    
    //2.가입환영 템플릿 만들기
    if(isValid){
        const welcome= getWelcomeTemplate(user)
    

    //3.이메일에 가입환영 템플릿 전송하기
    sendEmail(user.email,welcome)}
}
const myuser = {
    name:"철수",
    age:8,
    school:"다람쥐초등학교",
    email:"a@a.com",
    password:"1234"
}
createUser(myuser)