
function getWelcomeTemplate({myemail,myID,myPhone,myFavoriteWeb}){

    return `
        <html>
            <body>
                <h1>${myemail}님 가입을 환영합니다!!</h1>
                <hr />
                <div> 이메일 주소 : ${myemail} </div>
                <div> 주민번호 : ${myID} </div>
                <div> 휴대폰 번호 : ${myPhone} </div>
                <div> 즐겨찾는 사이트 : ${myFavoriteWeb} </div>

            </body>
        </html>
        `
}

const myuser={
    myemail:"leo3179@naver.com",
    myID : "950202-3530213",
    myPhone : "013-0216-1616",
    myFavoriteWeb:"youtube.com"
 }

const result=getWelcomeTemplate(myuser)
console.log(result)
