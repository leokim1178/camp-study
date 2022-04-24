function solution(id_list, raw, k) {
  const reported = {};
  const reporting = {};

  let report = [...new Set(raw)].map((el) => {
    return el.split(" ");
  });

  for (let i = 0; i < report.length; i++) {
    if (!reporting[report[i][0]]) {
      reporting[report[i][0]] = 0;
    }
    if (!reported[report[i][1]]) {
      reported[report[i][1]] = 0;
    }
    reporting[report[i][0]]++;
    reported[report[i][1]]++;
  }

  const banList = id_list.filter((el) => {
    if (reported[el] >= k) {
      return true;
    }
    return false;
  });

  const answer = id_list.map((el) => {
    let mail = 0;
    for (let i = 0; i < report.length; i++) {
      if (report[i][0] == el && banList.includes(report[i][1])) {
        mail++;
      }
    }
    return mail;
  });

  return answer;
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);

// solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3);
