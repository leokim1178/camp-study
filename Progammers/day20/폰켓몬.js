function solution(nums) {
  var answer = 0;
  let set = new Set(nums);
  let sort = [...set.keys()];
  return nums.length / 2 >= sort.length ? sort.length : nums.length / 2;
}
