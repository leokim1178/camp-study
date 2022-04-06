function solution(a, b) {
  const A = a.sort();
  const B = b.sort();
  for (i = 0; i < a.length; i++) {
    if (!(A[i] === B[i])) {
      return A[i];
    }
  }
}

function solution2(a, b) {
  for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i])) {
      a.splice(a.indexOf(b[i]), 1);
    }
  }
  return a[0];
}

function solution3(a, b) {
  a.sort();
  b.sort();
  return a.filter((name, i) => {
    return name !== b[i];
  })[0];
}
