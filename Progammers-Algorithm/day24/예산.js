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

function solution(d, budget) {
  const answer = d
    .sort((a, b) => a - b)
    .filter((money) => {
      budget -= money;
      console.log(budget);
      if (budget >= 0) {
        return money;
      }
    });
  return answer.length;
}
