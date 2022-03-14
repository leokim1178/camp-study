
//module 방식 (최신)
import { checkValidationPhone,getToken,sendTokenToSMS } from './phone.js'

//commonjs 방식
// const {checkValidationPhone}=require('./phone.js')


//핸드폰 토큰 생성하는 API - > 이렇게 주석을 달기도 하지만 함수이름만으로 알수 있게 하는것도 중요하다
function createTokenOfPhone(myphone){
    //1.휴대폰번호 자릿수 맞는지 확인하기
    const isValid= checkValidationPhone(myphone)
    if(isValid){    
    //2.핸드폰 토큰 6자리 만들기
    const myToken = getToken()
    //3.핸드폰 번호에 토큰 전송하기
    sendTokenToSMS(myphone,myToken)}
}

createTokenOfPhone("01015122378")

