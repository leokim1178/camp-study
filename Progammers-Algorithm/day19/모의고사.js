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
    //==는 type과 상관없이 값만 비교한다
    //===는 type과 값을 모두 비교한다
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
