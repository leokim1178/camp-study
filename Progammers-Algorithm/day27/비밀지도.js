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
