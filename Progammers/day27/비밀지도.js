function solution(n, arr1, arr2) {
  let bin1, bin2;

  for (let i = 0; i < n; i++) {
    bin1 = arr1.map((x) => {
      let bin = [];
      for (let i = 0; i < n; i++) {
        bin.unshift(x % 2);
        x = Math.floor(x / 2);
      }
      return bin.join("");
    });
    bin2 = arr2.map((x) => {
      let bin = [];
      for (let i = 0; i < n; i++) {
        bin.unshift(x % 2);
        x = Math.floor(x / 2);
      }
      return bin.join("");
    });
  }

  const map = bin1.map((y, i) => {
    let tsure = "";
    for (j = 0; j < n; j++) {
      y[j] == 0 && bin2[i][j] == 1
        ? (tsure += "#")
        : y[j] == 0
        ? (tsure += " ")
        : (tsure += "#");
    }
    return tsure;
  });
  return map;
}

//vertical bar 공부

function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = "";

    //지도1을 2진법으로 변환한 데이터를 저장
    const map1 = arr1[i].toString(2).padStart(n, "0");
    //지도2를 2진법으로 변환한 데이터를 저장
    const map2 = arr2[i].toString(2).padStart(n, "0");

    for (let j = 0; j < map1.length; j++) {
      //둘 중 하나라도 벽이기 때문에, 전체 지도에서도 벽이다.
      if (map1[j] === "1" || map2[j] === "1") {
        answer[i] += "#";
      } else if (map1[j] === "0" && map2[j] === "0") {
        answer[i] += " ";
      }
    }
  }
  return answer;
}
