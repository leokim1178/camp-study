// 1차 시도 : 실패
function solution(record) {
  record = record.map((el) => el.split(" "));

  const logs = [];
  const uidName = {};
  for (el of record) {
    const action = el[0];
    const uid = el[1];
    const name = el[2];
    if (action === "Enter") logs.push(`${uid}님이 들어왔습니다.`);
    if (action === "Leave") {
      logs.push(`${uid}님이 나갔습니다.`);
      continue;
    }
    uidName[uid] = name;
  }

  const uids = Object.keys(uidName);
  console.log(uidName);

  const result = logs.map((el) => {
    for (uid of uids) {
      if (el.includes(uid)) {
        return el.replace(uid, uidName[uid]);
      }
      //이전 uid와 중복되는 구문이 있는 uid가 등록되었을때 오류가 발생한다
      //예를 들어 uid1234와 uid1234567이 있다면 map 함수 과정에서 uid1234가 포함되어있고 이를 먼저 replacing 해서 return 하기 때문에 New님이 들어왔습니다가 아닌 New567님이 들어왔습니다와 같은 상황이 발생한다
      //해결법 : 객체를 미리 만들어주고 로그를 만든다. replace를 쓰지 않는다(허술한 함수라는 걸 느꼈다)
    }
  });
  console.log(result);
  return result;
}

// 2차 시도 : 성공!!
// function solution(record) {
//   record = record.map((el) => el.split(" "));

//   const logs = [];
//   const uidName = {};
//   for (el of record) {
//     const action = el[0];
//     const uid = el[1];
//     const name = el[2];
//     if (action !== "Leave") uidName[uid] = name;
//   }

//   for (el of record) {
//     const [action, uid, name] = el;
//     if (action === "Enter") logs.push(`${uidName[uid]}님이 들어왔습니다.`);
//     if (action === "Leave") logs.push(`${uidName[uid]}님이 나갔습니다.`);
//   }

//   return logs;
// }

solution([
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
  "Enter uid1234567 Ryanj",
  "Change uid1234 Muzi",
  "Change uid1234 Leo",
  "Leave uid1234",
  "Enter uid1234 New",
  "Enter uid4466 Hi",
]);
