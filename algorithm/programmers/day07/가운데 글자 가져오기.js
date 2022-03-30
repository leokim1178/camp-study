function solution(s) {
  var answer = "";
  s.length % 2 === 1
    ? (answer = s[Math.floor(s.length / 2)])
    : (answer = s[s.length / 2 - 1] + s[s.length / 2]);
  return answer;
}
