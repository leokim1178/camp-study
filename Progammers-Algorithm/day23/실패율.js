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
