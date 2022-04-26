function solution(s) {
  while (s.includes("()")) {
    s = s.replace("()", "");
  }

  return s.length === 0;
}
//효율성 테스트 실패(시간초과)

function solution(s) {
  const limit = s.length / 2;
  for (let i = 0; i < limit; i++) {
    s = s.replace("()", "");
  }
  return s === "";
}
//효율성 테스트 실패(시간초과)

function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      //열려있다면 +1
      depth++;
    } else if (s[i] === ")") {
      //닫혀있다면 -1
      depth--;
      //닫혀있는게 더 많다면 먼저 false를 리턴한다
      if (depth < 0) {
        return false;
      }
    }
  }

  return depth == 0;
}

function solution(s) {
  if (s[0] === ")" || s[s.length - 1] === "(") return false;

  let fail = false;
  const answer = s.split("").reduce((acc, cur) => {
    if (acc < 0) {
      fail = true;
    }
    return acc + (cur === "(" ? 1 : -1);
  }, 0);
  return answer === 0 && !fail;
}
