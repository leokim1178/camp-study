function solution(N, stages) {
  //실패율 구하기
  let arr = [];
  let challengers = stages.length;
  //실패율 =  스테이지에 도달했으나 클리어하지 못한 플레이어수 /스테이지에 도달한 플레이어수
  for (i = 1; i <= N; i++) {
    const winners = stages.filter((x, j) => {
      return x == i;
    }).length;
    let obj = {};
    obj.percent = winners / challengers;
    obj.number = i;
    arr.push(obj);
    challengers -= winners;
  }
  arr.sort((x, y) => {
    return y.percent - x.percent;
  });
  const answer = arr.map((x) => {
    return x.number;
  });
  return answer;
}

function solution(N, stages) {
  stages.sort((a, b) => a - b);
  let allUsers = stages.length;
  const infos = [];
  for (let i = 1; i <= N; i++) {
    infos.push({
      stage: i, //현재 스테이지의 번호
      users: 0, // 클리어하지 못한 유저의 수
      fail: 0, //스테이지의 실패율
    });
  }

  for (i = 0; i < stages.length; i++) {
    if (infos[stages[i] - 1]) {
      infos[stages[i] - 1].users++;

      //현재 스테이지의 번호와 다음 스테이지의 번호가 동일하지 않다면
      //===현재 스테이지의 유저의 합산이 완료되는 시점
      if (stages[i] !== stages[i + 1]) {
        const fail = infos[stages[i] - 1].users / allUsers;
        allUsers -= infos[stages[i] - 1].users;
        infos[stages[i] - 1].fail = fail;
      }
    }
  }
  return infos
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => el.stage);
}

///arr.slice 개꿀팁///////////////////
arr = [1, 2, 2, 2, 3, 3, 4, 4];
arr.indexOf(2);
arr.lastIndexOf(2);

arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
///##################################//////

//오름차순 혹은 내림차순으로 정리되어있어야 한다

function solution(N, stages) {
  stages.sort((a, b) => a - b);
  let allUsers = stages.length;
  const answer = new Array(N)
    .fill(1)
    .map((num, i) => {
      const stage = num + i;
      const arr = stages.slice(
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );

      const fail = arr.length / allUsers;
      allUsers -= arr.length;

      return { stage, fail };
    })
    .sort((a, b) => b.fail - a.fail)
    .map((el) => el.stage);
  return answer;
}
