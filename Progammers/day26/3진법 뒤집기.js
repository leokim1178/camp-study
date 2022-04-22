function solution(n) {
  var answer = "";
  for (i = 0; n / 3 ** i > 0; i++) {
    answer += n % 3;
    n = Math.floor(n / 3);
  }
  const result = answer
    .split("")
    .reverse()
    .reduce((acc, cur, i) => {
      return acc + cur * 3 ** i;
    }, 0);
  return result;
}

a = 45; //45

String(a);

a.toString(3); //10진법을 N진수의 결과를 받아온다
// '1200'

b = "1200";

parseInt(b, 3); // 45 // 3진법으로 변환

function solution(n) {
  console.log("변환 전: " + n);
  n = n.toString(3);
  console.log("변환 후: " + n);

  let answer = "";
  for (let i = n.length - 1; i >= 0; i--) {
    answer += n[i];
  }
  console.log(answer);
  //포문을 반대로....반전
  return parseInt(answer, 3); // answer를 3진법으로 변환하겠다
}

function solution(n) {
  n = n
    .toString(3) //n을 3진법으로 변환
    .split("")
    .reverse()
    .join("");

  console.log(n);
  return parseInt(n, 3);
}
