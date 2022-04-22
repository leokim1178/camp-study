import { Token } from "../../models/token.model.js";
import {checkValidationPhone,getToken,sendTokenToSMS} from "./phone.js"


export class PostPhoneService{
    input;
    constructor(P,T){
        this.input = P
    }

    //1.휴대폰번호 자릿수 맞는지 확인하기
    checkPhoneNumber= () =>{
        const myPhone = this.input
        return checkValidationPhone(myPhone)
    }

    //2.핸드폰 토큰 6자리 만들기
    numberToToken= ()=>{
        return getToken();
    }

    //3.핸드폰 번호에 토큰 전송하기
    sendSMS=(myPhone, myToken)=>{
    sendTokenToSMS(myPhone, myToken);
    }
    
    saveToken=async(myPhone,myToken)=>{
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
    }
}

export class PatchPhoneService{
    //1.전화번호가 db에 있는지 확인
    findPhone=async(myPhone)=>{
        return await Token.findOne({ phone: myPhone })
    }
    //2. 토큰이 db와 일치하는지 확인
    findToken=async(myToken)=>{
        return await Token.findOne({ token: myToken })
    }
        //3. 토큰 정보 업데이트
    updateToken=async(myToken)=>{
        return await Token.updateOne({ token: myToken }, { isAuth: true });
    }
}