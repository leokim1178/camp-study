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

// solution([70, 50, 80, 50, 50, 50, 50, 50, 50, 45, 50, 50, 50, 50, 50, 5], 100);
// solution([70, 80, 50, 200, 240], 240);

// solution([70, 50, 80, 50, 90, 40], 240);
