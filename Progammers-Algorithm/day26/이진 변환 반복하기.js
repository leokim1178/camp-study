function solution(s) {
  let zero = 0;
  let result = 0;
  let string = s;

  for (let k = 0; k < 10; k++) {
    let lng = string.split("").filter((x) => x != 0).length;
    zero += string.length - lng;
    let tr = "";
    for (let i = 0; lng / 2 ** i > 0; i++) {
      tr += lng % 2;
      lng = Math.floor(lng / 2);
    }
    string = tr.split("").reverse().join("");
    result++;

    if (string == 1) {
      break;
    }
  }

  return [result, zero];
}

function solution(s) {
  let count = 0; //총 시도한 횟수
  let remove = 0; // 0이 제거된 총 횟수

  //s가 "1"이 되지 않을 때까지, ("1"이 되면 중단)
  while (s !== "1") {
    count++;

    //"1"만 담는 변수
    let temp = "";
    //"0"을 제거하는 반복문
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        //0을 발견했다면 temp 변수에 "0"을 넣지 않는다.
        remove++;
        continue;
      }
      //temp 에는 "1"만 담는다.
      temp += s[i];
    }
    s = temp.length;
    //s를 2진법으로 변환한 데이터의 결과가 "1"이라면 반복문이 종료
    s = s.toString(2);
    console.log(s, count, remove, temp);
  }
  return [count, remove];
}

let count = 0;
function recursion() {
  if (count >= 5) {
    return;
  }

  count++;
  console.log(count);
  return recursion();
}

recursion(); //5
//끊어주는 시점만 정해주면 while문같이 사용가능

//재귀함수로 풀기
function solution(s) {
  let [count, remove] = [0, 0];

  function recursion() {
    if (s === "1") {
      return [count, remove];
    }
    //0을 제거
    remove += s.split("").filter((el) => el === "0").length;
    //0이 제거된 1만 남은 문자열의 길이값을 2진법으로 변환
    s = s.split("").filter((el) => el === "1").length;
    s = s.toString(2);
    count++;
    return recursion();
  }
  return recursion();
}
