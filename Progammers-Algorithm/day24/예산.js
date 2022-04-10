function solution(d, budget) {
  d.sort((x, y) => x - y);
  let answer = 0;
  d.reduce((acc, cur) => {
    const result = acc + cur;
    if (result <= budget) {
      answer += 1;
    }
    return result;
  }, 0);
  return answer;
}
