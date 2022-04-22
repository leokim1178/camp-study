function solution(nums) {
  let arr = [];

  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      for (k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  const result = [...arr].filter((x) => {
    for (i = 2; i < x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  });
  return result.length;
}

function solution(nums) {
  let answer = 0;
  let idx = 0;
  nums.forEach((num1, i) => {
    idx = i + 1;
    nums.slice(idx).forEach((num2) => {
      console.log(num1, num2);
      idx++;
      nums.slice(idx).forEach((num3) => {
        const sum = num1 + num2 + num3;
        let count = 0;
        for (let j = 0; j <= sum; j++) {
          if (sum % j === 0) {
            count++;
          }
          if (count > 2) {
            break;
          }
        }
        if (count === 2) {
          answer++;
        }
      });
    });
  });

  return answer;
}
