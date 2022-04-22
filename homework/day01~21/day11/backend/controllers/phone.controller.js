import { PostPhoneService,PatchPhoneService} from "./services/phone.service.js"

export class PhoneController {
  postPhone = async (req, res) => {
    const myPhone = req.body.myPhone;
    const postPhoneService = new PostPhoneService(myPhone);
    //1.휴대폰번호 자릿수 맞는지 확인하기
    const isValid = postPhoneService.checkPhoneNumber();
    if (isValid) {
      //2.핸드폰 토큰 6자리 만들기
      const myToken = postPhoneService.numberToToken();
      //3.핸드폰 번호에 토큰 전송하기
      postPhoneService.sendSMS(myPhone, myToken);
      //4.토큰 저장하기
      postPhoneService.saveToken(myPhone, myToken);
      res.send("완료!!");
    }
  };

  patchPhone = async (req, res) => {
    const myPhone = req.body.myPhone;
    const myToken = req.body.myToken;
    const patchPhoneService= new PatchPhoneService()
    //1.전화번호가 db에 있는지 확인
    if (await patchPhoneService.findPhone(myPhone)) {
      //2. 토큰이 db와 일치하는지 확인
      if (await patchPhoneService.findToken(myToken)) {
        //3. 토큰 정보 업데이트
        await patchPhoneService.updateToken(myToken)
        await res.send(true);
        console.log("인증완료");
      } else {
        res.send(false);
        console.log("인증번호가 일치하지 않습니다");
      }
    } else {
      res.send(false);
      console.log("인증요청한 번호가 확인되지 않습니다");
    }
  };
}
