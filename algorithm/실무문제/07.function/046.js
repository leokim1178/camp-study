function validation(email, password, passwordCheck) {
    if(email.includes("@")!==true){
        return "이메일 주소를 다시 확인해주세요"
    }else if(String(password).length<8 || String(password).length>16){
        return "비밀번호는 8~16자여야 합니다."
    }else if(password!==passwordCheck){
        return "비밀번호를 다시 확인해주세요"
    }else{
        return "회원가입을 축하합니다"
    }}




console.log(validation("code@naver.com", 12345678,12345678) )
// 회원가입을 축하합니다.
console.log(validation("codenaver.com", 12345678,12345678) )
// 이메일 주소를 다시 확인해주세요.
console.log(validation("code@naver.com", 1234,1234))
// 비밀번호는 8~16자리여야 합니다.
console.log(validation("code@naver.com", 12345678,12345679) )
// 비밀번호를 다시 확인해주세요