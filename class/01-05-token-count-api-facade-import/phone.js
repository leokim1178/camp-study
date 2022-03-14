
export function checkValidationPhone(myphone){
    if(myphone.length !== 10 && myphone.length !==11){
        console.log("폰번호를 제대로 입력해주세요")
        return false
    } else {
        return true
    }
}

export function getToken(){
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

export function sendTokenToSMS(myphone,myToken){
    console.log(myphone+"번호로 인증번호"+myToken+"를 전송합니다")
}