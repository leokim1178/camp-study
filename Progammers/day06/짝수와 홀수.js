function solution1(num) {
  var answer = "";
  if (num % 2 === 0) {
    answer = "Even";
  } else {
    answer = "Odd";
  }
  return answer;
}

function solution2(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
