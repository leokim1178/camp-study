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

function solution2(id_list, report, k) {
  const users = {};
  const reporter = {};

  report = Array.from(new Set(report));
  report.forEach((el, i) => {
    const info = el.split(" ");
    if (users[info[i]] === undefined) users[info[i]] = 0;
    if (reporter[info[0]] === undefined) reporter[info[0]] = [];

    users[info]++;
    reporter[info]++;
  });

  const aaa = id_list.map((name) => {
    const arr = reporter[name] || [];
    // return arr.reduce((acc,cur)=>{
    // return acc+(users[cur]>=)
    // })
  });
  console.log(aaa);
}

solution2(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);

/////Map 보충수업////

const obj = new Map();
const obj2 = {};

obj; // Map{ }
obj2; // { }

obj.set("name", "철수");
obj2["name"] = "철수";

console.log(obj.get("name")); // 철수
console.log(obj2.name); // 철수

obj.delete("name"); // 삭제하는 방법
obj.clear(); //맵 전체 데이터지우기

//객체랑 똑같은데 왜 사용할까
const obj3 = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(Object.keys(obj3).length); // 메소드가 많이 사용된다

const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.size);

const obj4 = {};
obj4[undefined] = 1;
obj4.undefined; //1

obj4[123] = 2;
obj4; //{ 123: 2, undefined :1 }
//키값 123이 문자열로 변환됨

const map2 = new Map();
map2.set(123, "1");
