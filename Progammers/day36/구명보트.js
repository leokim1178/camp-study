// function solution(people, limit) {
//   let answer = 0;

//   const result = people.reduce((acc, cur, i) => {
//     return acc + cur;
//   }, 0);
//   console.log(result/limit)
//   console.log(Math.ceil(result / limit));

//   console.log(answer);
// }

function solution(people, limit) {
  const p = people.length;
  let num;
  let boat = 0;
  for (let i = 0; i < p; i++) {
    for (let j = 0; j < people.length; j++) {
      if (i !== j && people[i] + people[j] <= limit) {
        people.splice(i, i);
        people.splice(j - 1, j - 1);

        boat++;
        break;
      }
    }
  }
  return boat + people.length;
}

// solution([70, 50, 80, 50], 100);
// solution([70, 80, 50], 100);
