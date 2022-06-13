// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
    document.querySelector('#ValidationInputWrapper').style.display = 'flex';
    const Phone1 = document.getElementById('PhoneNumber01').value;
    const Phone2 = document.getElementById('PhoneNumber02').value;
    const Phone3 = document.getElementById('PhoneNumber03').value;
    const myPhone = Phone1 + Phone2 + Phone3;

    await axios.post('http://localhost:3001/tokens/phone', {
        myPhone: myPhone,
    });
    console.log('인증 번호 전송');
};

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
    const myToken = document.getElementById('TokenInput').value;
    const Phone1 = document.getElementById('PhoneNumber01').value;
    const Phone2 = document.getElementById('PhoneNumber02').value;
    const Phone3 = document.getElementById('PhoneNumber03').value;
    const myPhone = Phone1 + Phone2 + Phone3;
    await axios.patch(`http://localhost:3001/tokens/phone`, {
        myToken: myToken,
        myPhone: myPhone,
    });
};

// 회원 가입 API 요청
const submitSignup = async () => {
    const Phone1 = document.getElementById('PhoneNumber01').value;
    const Phone2 = document.getElementById('PhoneNumber02').value;
    const Phone3 = document.getElementById('PhoneNumber03').value;
    const phone = Phone1 + Phone2 + Phone3;
    const name = document.getElementById('SignupName').value;
    const personal1 = document.getElementById('SignupPersonal1').value;
    const personal2 = document.getElementById('SignupPersonal2').value;
    const personal = personal1 + '-' + personal2;
    const prefer = document.getElementById('SignupPrefer').value;
    const email = document.getElementById('SignupEmail').value;
    const pwd = document.getElementById('SignupPwd').value;
    const user = { name, phone, personal, prefer, email, pwd };
    await axios.post(`http://localhost:3001/user`, { user: user });
    console.log('회원 가입 완료');
};
