function solution(s) {
  while (s.includes("()")) {
    s = s.replace("()", "");
  }

  return s.length === 0;
}

solution("(())()");
