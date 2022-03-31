function solution1(arr1, arr2) {
  let answer = new Array(arr1.length)
    .fill(null)
    .map(() => Array(arr1[0].length));

  answer.forEach((x, i) => {
    for (j = 0; j < x.length; j++) {
      x[j] = arr1[i][j] + arr2[i][j];
    }
  });

  return answer;
}

function solution2(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, j) => {
      return num2 + arr2[i][j];
      //맵은 새로운 배열을 리턴한다
    });
  });
  return answer;
}
