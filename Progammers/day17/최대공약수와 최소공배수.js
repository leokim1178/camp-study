function solution1(n, m) {
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

function solution2(n, m) {
  const biggest = Math.max(n, m);
  //최대공약수
  let max = 0;
  for (let i = 1; i <= biggest; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
      console.log(max);
    }
  }
  let min = 0;
  for (let i = biggest; i <= n * m; i += biggest) {
    if (i % Math.min(n, m) === 0) {
      min = i;
      break;
    }
  }
  return [max, min];
}

function solution3(n, m) {
  //유클리드 호재법
  //-최대공약수를 구하기 위한 알고리즘

  //a를 b로 나눴을 때 (a가 b보다 클 경우)===큰 수에서 작은수를 나눴을 때
  //나머지 값이 0이되면, 작은수(b)가 최대공약수가 된다.
  //나머지 값이 0이 아니라면, 작은 수(b)가 큰수(a)가 된다.
  //나머지 값은 작은수(b)가 된다.

  //나머지 값이 0이 나올때까지 위의 과정을 반복
  //나머지 값이 0이 나오면, 작은 수 (b)가 최대공약수가 된다.

  let a = Math.max(n, m); //큰수
  let b = Math.min(n, m); //작은수
  let r = 0;
  while (a % b > 0) {
    r = a % b;
    a = b; //큰수에 작은수를 할당
    b = r; //작은 수에 나머지 값을 할당
  }
  //최소공배수 구하는 공식
  //최소공배수는 두수를 곱한값에 최대공약수를 나눈값
  return [b, (n * m) / b];
}
