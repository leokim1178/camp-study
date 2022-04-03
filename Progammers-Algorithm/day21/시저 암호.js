function solution(s, n) {
  var answer = "";
  const arr = [...s];

  arr.forEach((x, i) => {
    if (x === " ") {
      answer += " ";
    } else if (s.charCodeAt(i) == 90 || s.charCodeAt(i) == 122) {
      answer += String.fromCharCode(s.charCodeAt(i) - 26 + (n % 25));
    } else {
      answer += String.fromCharCode(s.charCodeAt(i) + (n % 25));
    }
  });

  return answer;
}

function solution(s, n) {
  const arr = [...s];
  const answer = arr.reduce((acc, cur, i) => {
    if (cur === " ") {
      return acc + cur;
    } else if (s.charCodeAt(i) == 90 || s.charCodeAt(i) == 122) {
      return acc + String.fromCharCode(s.charCodeAt(i) - 26 + (n % 25));
    } else {
      return acc + String.fromCharCode(s.charCodeAt(i) + (n % 25));
    }
  }, "");

  return answer;
}

function solution(s, n) {
  const arr = [...s];
  const answer = arr.reduce((acc, cur, i) => {
    if (cur == " ") {
      return acc + cur;
    } else if (
      (s.charCodeAt(i) + n > 90 && s.charCodeAt(i) + n < 97) ||
      s.charCodeAt(i) + n > 122
    ) {
      return acc + String.fromCharCode(s.charCodeAt(i) - 26 + n);
    } else {
      return acc + String.fromCharCode(s.charCodeAt(i) + n);
    }
  }, "");
  return answer;
}
