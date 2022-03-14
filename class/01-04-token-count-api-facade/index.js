
function checkValidationPhone(myphone){
    if(myphone.length !== 10 && myphone.length !==11){
        console.log("폰번호를 제대로 입력해주세요")
        return false
    } else {
        return true
    }
}

function getToken(){
    const mycount=6
    if(mycount===undefined){
        console.log("똑바로 입력해 이새끼야")
        return
        
    }else if(mycount<=0){
        console.log("에러! 너무 적습니다")
        return
    }else if(mycount>10){
        console.log("에러! 너무 많습니다")
        return
    }
    const result =String(Math.floor(Math.random()*10**mycount)).padStart(mycount,"0")
    return result
}

function sendTokenToSMS(myphone,myToken){
    console.log(myphone+"번호로 인증번호"+myToken+"를 전송합니다")
}


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

