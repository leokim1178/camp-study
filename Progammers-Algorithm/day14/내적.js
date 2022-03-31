function solution1(a, b) {
  const arr = new Array(a.length).fill(0).reduce((acc, cur, i) => {
    cur = a[i] * b[i];
    return acc + cur;
  }, 0);

  return arr;
}
//my solution
