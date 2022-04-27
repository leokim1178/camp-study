function solution(progresses, speeds) {
  let costlist = [];
  for (let i = 0; i < speeds.length; i++) {
    let cost = Math.ceil((100 - progresses[i]) / speeds[i]);

    costlist.push(cost);
  }
  console.log(costlist);
  const arr = costlist;
  const answer = [];
  for (let i = 0; arr.length; i++) {
    let finish = 0;
  }

  return answer;
}

solution([93, 30, 55], [1, 30, 5]);

// solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
