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

//강사님 풀이1
const answerTable = [
  [1, 2, 3, 4, 5], //1번 수포자
  [2, 1, 2, 3, 2, 4, 2, 5], //2번 수포자
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], //3번 수포자
];

function solution(answers) {
  let answer = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        answer[l]++;
      }
    }
  }

  const result = [];
  answer.forEach((x, i) => {
    if (x == Math.max(...answer)) {
      result.push(i + 1);
    }
  });

  return result;
}

//강사님 풀이2
function solution(answers) {
  const scoreList = answerTable.map((el, i) => {
    const score = answers.reduce((acc, cur, l) => {
      return acc + (el[l % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score };
  });

  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score;
    })
  );
  return scoreList
    .filter((el) => {
      return el.score == biggest;
    })
    .map((el) => el.student);
}
