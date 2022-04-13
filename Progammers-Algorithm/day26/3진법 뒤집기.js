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
