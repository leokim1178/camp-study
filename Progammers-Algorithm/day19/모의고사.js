function solution1(answers) {
  let answer = [];
  let a = [0, 0, 0];
  let s1 = "12345";
  let s2 = "21232425";
  let s3 = "3311224455";

  for (i = 0; i < answers.length; i++) {
    if (answers[i] == s1[i % 5]) {
      a[0]++;
    }
    if (answers[i] == s2[i % 8]) {
      a[1]++;
    }
    if (answers[i] == s3[i % 10]) {
      a[2]++;
    }
  }
  for (i = 0; i < a.length; i++) {
    if (a[i] == Math.max(...a)) {
      answer.push(i + 1);
    }
  }
  return answer;
}

function solution2(answers) {
  let answer = [];
  let a = [0, 0, 0];
  let s1 = "12345";
  let s2 = "21232425";
  let s3 = "3311224455";
  answers.forEach((x, i) => {
    if (answers[i] == s1[i % 5]) {
      a[0]++;
    }
    if (answers[i] == s2[i % 8]) {
      a[1]++;
    }
    if (answers[i] == s3[i % 10]) {
      a[2]++;
    }
  });

  for (i = 0; i < a.length; i++) {
    if (a[i] == Math.max(...a)) {
      answer.push(i + 1);
    }
  }
  return answer;
}
