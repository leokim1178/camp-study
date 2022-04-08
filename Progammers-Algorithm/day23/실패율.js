function solution(N, stages) {
  let arr = new Array(N).fill(0);
  for (i = 1; i <= N; i++) {
    for (j = 0; j < stages.length; j++) {
      if (stages[j] == i) {
        arr[i - 1]++;
      }
    }
  }
  console.log(arr);
  let deno = stages.length;
  const per = arr.map((x, i) => {
    let devide = deno;
    deno -= x;
    return x / devide;
  });
  console.log(per);
  const per2 = [...per];
  let answer = [];
  per2.sort((a, b) => {
    return b - a;
  });
  console.log(per2);
  console.log(per2.indexOf(per[0]));
  for (i = 0; i < per.length; i++) {
    answer.push(per2.indexOf(per[i]) + 1);
  }
  console.log(answer);
}
