function solution(n) {
  let f = new Array(n + 1);
  f[0] = 0;
  f[1] = 1;

  for (i = 2; i < n + 1; i++) {
    f[i] = (f[i - 2] + f[i - 1]) % 1234567;
  }
  return f[n];
}

function solution(n) {
  const f = [0, 1];

  for (i = 2; i < n + 1; i++) {
    f.push((f[i - 2] + f[i - 1]) % 1234567);
  }
  return f[n];
}

// 숫자 (number) = Int
// 2의  53제곱 - 1 까지만 제대로 된 데이터 표현이 가능하다

2 ** 53 - 1; // 사용가능한 최대값

a = Number.MAX_SAFE_INTEGER; // Int가 이정도 범위까지만 나타낼수 있다

Number.isSafeInteger(a); //true
Number.isSafeInteger(a + 1); //false

function solution(n) {
  let prev = 0;
  let next = 1;
  let sum = prev + next;

  const answer = new Array(n - 1).fill(1).reduce((acc) => {
    sum = (prev + acc) % 1234567;
    prev = acc;
    next = sum;
    return sum;
  }, sum);
  return answer;
}
