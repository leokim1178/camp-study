function solution1(a, b) {
  const day = new Date(`2016.${a}.${b}`).getDay();
  if (day === 0) {
    return "SUN";
  } else if (day === 1) {
    return "MON";
  } else if (day === 2) {
    return "TUE";
  } else if (day === 3) {
    return "WED";
  } else if (day === 4) {
    return "THU";
  } else if (day === 5) {
    return "FRI";
  } else if (day === 6) {
    return "SAT";
  }
}

function solution2(a, b) {
  const w = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = new Date(`2016.${a}.${b}`).getDay();
  for (i = 0; i < w.length; i++) {
    if (day === i) {
      return w[i];
    }
  }
}

//best
function solution3(a, b) {
  const w = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = new Date(`2016.${a}.${b}`).getDay();
  return w[day];
}

//solution4~5
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution4(a, b) {
  //a월 b일까지 해당되는 모든 일수를 저장
  let answer = 0;
  for (let i = 1; i < a; i++) {
    //a월 전까지의 모든 월의 일수를 더한다
    answer += month[i];
  }
  answer += b - 1;
  answer = week[answer % 7];
  return answer;
}

function solution5(a, b) {
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return (
      acc +
      (mn !== a
        ? // 이전 월일 경우
          month[mn]
        : //해당 월일 경우
          b - 1)
    );
  }, 0);
  return week[answer % 7];
}
