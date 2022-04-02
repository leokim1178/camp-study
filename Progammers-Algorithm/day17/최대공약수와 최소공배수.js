function solution(n, m) {
  let arr = [];
  for (i = 1; i <= n; i++) {
    if (n % i === 0 && m % i === 0) {
      arr.push(i);
    }
  }
  let max = Math.max(...arr);
  let min = (m * n) / max;
  return [max, min];
}
