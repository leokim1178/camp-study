function solution(absolutes, signs) {
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
