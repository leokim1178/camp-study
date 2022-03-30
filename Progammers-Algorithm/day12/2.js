function solution(numbers) {
  let arr = new Set([]);
  for (i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      // if(arr.includes(sum)===false){
      arr.add(sum);
      // }
    }
  }
  return [...arr].sort((a, b) => a - b);
}

function solution2(numbers) {
  let arr = new Set([]);
  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach((num2) => {
      const sum = num1 + num2;
      arr.add(sum);
    });
  });

  return [...arr].sort((a, b) => a - b);
}

const a = [2, 1, 3, 4, 1];
const b = [5, 0, 2, 7];

console.log(solution(a));
