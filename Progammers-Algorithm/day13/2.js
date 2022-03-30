function solution1(a, b) {
  let answer = 0;
  if (a === b) {
    return a; //return b;
  } else {
    //제일 작은 값: (a와 b중 제일 작은값이 들어옵니다 )
    const min = Math.min(a, b); // =a>b?b:a;
    //제일 큰 값: (a와 b중 큰값)
    const max = Math.max(a, b); // =a>b?a:b;

    for (i = min; i <= max; i++) {
      answer += i;
    }
  }

  return answer;
}

function solution2(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const answer = new Array(max - min).fill(1).reduce((acc, cur, i) => {
    const num = min + cur + i;
    console.log(num);
    return acc + num;
  }, min);
  return answer;
}
