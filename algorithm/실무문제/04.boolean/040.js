function password(input1, input2) {
    let pw1=String(input1).toLowerCase();
    let pw2=String(input2).toLowerCase();
    if(pw1!==pw2){
        console.log("비밀번호를 다시 확인해주세요")
    }else if(pw1===pw2){
        console.log("회원가입을 축하합니다.")
    }
    

}

password("1234", "1235") // "비밀번호를 다시 확인해주세요."
password("1234", "1234") // "회원가입을 축하합니다."
password("1234", 1234) // "회원가입을 축하합니다."
password("aaaa", "AAAA") // "회원가입을 축하합니다."


























