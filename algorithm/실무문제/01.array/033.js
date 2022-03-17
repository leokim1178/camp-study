let eamil = "coDecAmp@gamil.com "

function mutateEmail(email){
    if(email.includes("@")){ 
        //이메일에 "@"가 있는지 검사해야 합니다.
        
        email.trim() 
        //이메일 앞 뒤에는 공백이 없어야 합니다.
        email=email.toLowerCase() 
        //이메일을 데이터베이스에 저장할 때는 모두 소문자로 변환되어야 합니다.

        return email

    }else{
        console.log("@이가 있는지 확인할것")
    }
}

console.log(mutateEmail(eamil))