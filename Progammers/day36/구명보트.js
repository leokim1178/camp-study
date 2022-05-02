function solution(people, limit) {
  people.sort((a, b) => a - b);
  let boat = 0;
  while (people.length) {
    let last = people.pop();
    if (last + people[0] <= limit) {
      people.shift();
    }
    boat++;
  }
  return boat;
}

function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);

  let last = people.length - 1;
  for (let i = 0; i < people.length; i++) {
    const weight = limit - people[i];
    console.log(people[i], weight);
    // 가벼운 사람의 몸무게가 보트에 수용할 수 있는 모뭄게보다 작을 경우
    //===보트에 태울 수 있다
    if (weight >= people[last]) {
      last--;
    }
    //대기열에 아무도 없는 경우
    if (i >= last) {
      console.log(answer);
      return answer;
    }
  }
}

// solution([70, 50, 80, 50, 50, 50, 50, 50, 50, 45, 50, 50, 50, 50, 50, 5], 100);
solution([70, 80, 50, 200, 240], 240);

// solution([70, 50, 80, 50, 90, 40], 240);
