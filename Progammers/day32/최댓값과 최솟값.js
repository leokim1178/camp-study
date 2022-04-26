function solution(s) {
  let string = s.split(" ").map((el) => {
    return Number(el);
  });

  const answer = [Math.min(...string), Math.max(...string)].join(" ");
  return answer;
}

function solution(s) {
  let string = s.split(" ");

  const answer = [Math.min(...string), Math.max(...string)].join(" ");
  return answer;
}
solution("1 2 3 4");
solution("-1 -2 -3 -4");
