function solution1(absolutes, signs) {
  var answer = 0;
  let arr = new Array(signs.length);
  for (i = 0; i < signs.length; i++) {
    arr[i] = [absolutes[i], signs[i]];
    if (arr[i][1]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }

  return answer;
}

function solution2(absolutes, signs) {
  var answer = 0;
  let arr = new Array(signs.length);
  absolutes.forEach((x, i) => {
    arr[i] = [x, signs[i]];
    if (arr[i][1]) {
      answer += x;
    } else {
      answer -= x;
    }
  });
  return answer;
}

function solution3(absolutes, signs) {
  var answer = 0;
  let arr = new Array(signs.length);
  absolutes.forEach((x, i) => {
    arr[i] = [x, signs[i]];
    arr[i][1] ? (answer += x) : (answer -= x);
  });
  return answer;
}

function solution4(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, i) => {
    return acc + (signs[i] ? cur : -cur);
  }, 0);
  return answer;
}
//reduce 사용
