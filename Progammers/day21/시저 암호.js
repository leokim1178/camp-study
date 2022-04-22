function solution(s, n) {
  const arr = [...s];
  let answer = arr.map((alp, i) => {
    if (alp == " ") {
      return alp;
    } else if (
      (s.charCodeAt(i) + n > 90 && s.charCodeAt(i) < 91) ||
      s.charCodeAt(i) + n > 122
    ) {
      return String.fromCharCode(s.charCodeAt(i) - 26 + n);
    } else {
      return String.fromCharCode(s.charCodeAt(i) + n);
    }
  });
  return answer.join("");
}

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
    } else {
      let idx = alphabet.indexOf(s[i]);
      const word =
        idx > 25 ? alphabet.substring(26) : alphabet.substring(0, 26);
      idx = word.indexOf(s[i]) + n;
      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
    } else {
      const word = lower.includes(s[i]) ? lower : upper;
      let idx = word.indexOf(s[i]) + n;

      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

function solution(s, n) {
  const answer = s.split("").reduce((acc, cur) => {
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n;

    if (idx >= 26) {
      idx -= 26;
    }
    return acc + (cur === " " ? " " : word[idx]);
  }, "");
  return answer;
}

//아스키 코드
// charCodeAt : 문자의 유니코드 데이터 '번호'를 리턴
//String.fromCharCode : 유니코드 데이터를 '문자'로 리턴

//대문자 : 65 ~90
//소문자 : 97~ 122
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
    } else {
      let idx = s[i].charCodeAt() + n;
      if (idx > 122 || (idx > 90 && idx - n < 97)) {
        //소문자 z(122)를 넘어가거나
        //대문자 z(90)를 넘어가면서
        //기존의 idx값이 소문자일 경우
        idx -= 26;
      }
      answer += String.fromCharCode(idx);
    }
  }
  return answer;
}
