function solution(s) {
  let arr = [];
  let eng = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let str = "";

  for (i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      str += s[i];
      if (eng.includes(str)) {
        arr.push(eng.indexOf(str));
        str = "";
      }
    } else if (!isNaN(s[i])) {
      arr.push(s[i]);
    }
  }
  return Number(arr.join(""));
}
