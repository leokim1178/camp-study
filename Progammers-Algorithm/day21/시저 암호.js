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
