function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let resultS = s;
    while (
      resultS.includes("()") ||
      resultS.includes("[]") ||
      resultS.includes("{}")
    ) {
      resultS = resultS.replace("()", "").replace("[]", "").replace("{}", "");
    }
    if (!resultS) {
      answer++;
    }
    s = s.split("");

    const shifted = s.shift();
    s = s.concat(shifted).join("");
  }
  console.log(answer);
  return answer;
}

solution("[](){}");
solution("}]()[{");
solution("[)(]");
solution("}}}");
