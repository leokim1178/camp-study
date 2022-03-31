function solution(s) {
  let arr = s.split(" ").filter((x) => {
    return x !== "";
  });
  let answer = new Array(arr.length).fill("");
  arr.forEach((x, i) => {
    x = x.trim();
    answer[i] += x[0].toUpperCase();
    for (j = 1; j < x.length; j++) {
      answer[i] += x[j].toLowerCase();
    }
  });
  return answer.join(" ");
}
