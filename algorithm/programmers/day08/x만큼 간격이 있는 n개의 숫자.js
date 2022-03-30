function solution(x, n) {
  const answer = new Array(n).fill(1).map((el, i) => {
    console.log((el + i) * x);
    return (el + i) * x;
  });

  console.log(answer);
  return answer;
}

function mySolution(x, n) {
  //내 풀이
  {
    var answer = [];
    for (i = 1; i <= n; i++) {
      answer.push(x * i);
    }
    return answer;
  }
}
