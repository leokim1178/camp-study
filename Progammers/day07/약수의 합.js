function solution(n) {
  const answer = new Array(n).fill(1).reduce((acc, cur, i) => {
    return n % (cur + i) === 0 ? acc + (cur + i) : acc;
  }, 0);
  return answer;
  console.log();
}
