function solution1(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) === true) {
      return false;
    }
  }
  return true;
}

function solution2(s) {
  var answer = true;
  answer = (s.length === 4 || s.length === 6) && !isNaN(Number(s));
  return answer;
}
