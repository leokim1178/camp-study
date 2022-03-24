// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const Phone1=document.getElementById("PhoneNumber01").value
  const Phone2=document.getElementById("PhoneNumber02").value
  const Phone3=document.getElementById("PhoneNumber03").value
  const myPhone=Phone1+Phone2+Phone3

  await axios.post(`http://localhost:3001/tokens/phone`,{myPhone})
  console.log('인증 번호 전송')
}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  axios.get(`http://localhost:3001/users`)
  
  console.log('핸드폰 인증 완료')
  
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const Phone1=document.getElementById("PhoneNumber01").value
  const Phone2=document.getElementById("PhoneNumber02").value
  const Phone3=document.getElementById("PhoneNumber03").value
  const myPhone=Phone1+Phone2+Phone3
  const Name=document.getElementById("SignupName").value
  const Personal=document.getElementById("SignupPersonal").value
  const Prefer=document.getElementById("SignupPrefer").value
  const Email=document.getElementById("SignupEmail").value
  const Pwd=document.getElementById("SignupPwd").value



  await axios.post('http://localhost:3001/user',{ 
    user : { Name, Personal, Prefer,Email,Pwd,myPhone}})
  console.log('회원 가입 완료')
}
