function solution(a, b) {
  const A = a.sort();
  const B = b.sort();
  for (i = 0; i < a.length; i++) {
    if (!(A[i] === B[i])) {
      return A[i];
    }
  }
}
