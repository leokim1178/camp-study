function solution1(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr = arr.filter((x) => !numbers.includes(x));
  const answer = arr.reduce((a, b) => a + b);
  return answer;
}
//my solution

function solution2(numbers) {
  let answer = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

function solution3(numbers) {
  const answer = new Array(9).fill(1).reduce((acc, cur, i) => {
    const num = cur + i;
    console.log(acc, num);
    return acc + (numbers.includes(num) ? 0 : num);
  }, 0);
  return answer;
}
