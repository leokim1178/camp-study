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

function solution(s) {
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

  for (i = 0; i < eng.length; i++) {
    while (s.includes(eng[i])) {
      s = s.replace(eng[i], i);
    }
  }
  return Number(s);
}

let numbers = [
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

function solution(s) {
  numbers.forEach((str, i) => {
    console.log(s.split(str), str);

    s = s.split(str).join(i);
  });
  return Number(s);
}

function solution(s) {
  //정규표현식
  // /(슬래시) 열고, /(슬래시) 닫는 형태로 사용이 된다
  // 슬래시 안에는 검증하려는 문자열 형태를 넣어준다.
  //g 명령어는 전역 검색을 의미한다

  s = s.replace(/zero/g, 0);
  s = s.replace(/one/g, 1);
  s = s.replace(/two/g, 2);
  s = s.replace(/three/g, 3);
  s = s.replace(/four/g, 4);
  s = s.replace(/five/g, 5);
  s = s.replace(/six/g, 6);
  s = s.replace(/seven/g, 7);
  s = s.replace(/eight/g, 8);
  s = s.replace(/nine/g, 9);

  return Number(s);
}

function solution(s) {
  //정규표현식
  // /(슬래시) 열고, /(슬래시) 닫는 형태로 사용이 된다
  // 슬래시 안에는 검증하려는 문자열 형태를 넣어준다.
  //g 명령어는 전역 검색을 의미한다

  for (i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}
