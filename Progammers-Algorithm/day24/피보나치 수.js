function solution(n) {
  let f = new Array(n + 1);
  f[0] = 0;
  f[1] = 1;

  for (i = 2; i < n + 1; i++) {
    f[i] = (f[i - 2] + f[i - 1]) % 1234567;
  }
  return f[n];
}
