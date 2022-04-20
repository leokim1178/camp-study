const isBonus = ["S", "D", "T"]; //보너스를 구분하기 위한 데이터

function solution(dartResult) {
  const answer = [];
  let score = ""; // 점수만 뽑아서 저장하는 변수
  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(Number(dartResult[i]))) {
      //숫자 타입으로 변환한 데이터의 결과가 NaN 값이 아닌 경우(숫자인경우)
      score += dartResult[i];
    } else {
      //숫자 타입이 아닌 경우(*이거나 #)
      if (isBonus.includes(dartResult[i])) {
        //보너스 처리("S","D","T")

        score = Number(score);
        if (dartResult[i] === "D") {
          score = score ** 2; //더블일 경우 제곱
        } else if (dartResult[i] === "T") {
          score = score ** 3; //트리플일 경우 세제곱
        }
        answer.push(score);
        score = "";
      } else {
        if (dartResult[i] === "#") {
          //아차상
          answer[answer.length - 1] *= -1;
        } else {
          //스타상일 경우
          answer[answer.length - 1] *= 2;
          //현재 게임이 2번째 게임 이상일 경우에만
          if (answer.length > 1) {
            //앞에 있는점수까지 두배로 만들어준다
            answer[answer.length - 2] *= 2;
          }
        }
      }
    }
  }
  return answer.reduce((acc, cur) => {
    return acc + cur;
  });
}
