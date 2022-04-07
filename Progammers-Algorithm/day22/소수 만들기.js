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
