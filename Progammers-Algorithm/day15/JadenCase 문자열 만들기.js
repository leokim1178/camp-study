function solution1(s) {
  let arr = s.split(" ").filter((x) => {
    return x !== "";
  });
  let answer = new Array(arr.length).fill("");
  arr.forEach((x, i) => {
    x = x.trim();
    answer[i] += x[0].toUpperCase();
    for (j = 1; j < x.length; j++) {
      answer[i] += x[j].toLowerCase();
    }
  });
  return answer.join(" ");
}

function solution2(s) {
  s = s.toLowerCase();
  let idx = 0;
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (letter === " ") {
      //공백이라면 idx를 초기화한다
      idx = 0;
    } else {
      if (idx === 0) {
        //단어의 앞부분을 체크한다
        letter = s[i].toUpperCase();
      }
      idx++;
    }
    answer += letter;
  }
  return answer;
}

function solution3(s) {
  s = s
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word !== "" ? word[0].toUpperCase() + word.substring(1) : word;
    });
  return s.join(" ");
}
