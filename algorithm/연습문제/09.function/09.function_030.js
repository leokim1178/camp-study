let validation = (pw1,pw2) =>{
    if( (pw1.length < 8 || pw1.length > 16) && (pw2.length<8 || pw2.length>16)
    ){
        console.log("비밀번호는 8~16자리여야 합니다")
    } else if(pw1.toUpperCase()!==pw2.toUpperCase()){
        console.log("비밀번호를 다시 확인해주세요")
    }else{
        console.log("true")
    }
}


let password1 = "a1B2c3D4"
let password2 = "A1b2C3d4"
validation(password1, password2) // true

let password3 = "1234"
let password4 = "1234"
validation(password3, password4) // "비밀번호는 8~16자리여야 합니다"

let password5 = "12345678"
let password6 = "12345679"
validation(password5, password6) // "비밀번호를 다시 확인해주세요"