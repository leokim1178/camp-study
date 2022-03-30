function solution1(x) {
  let sum = 0;
  //각각의 자릿수를 가져오기위해 문자열로 변환
  x = String(x); //x.toString()
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return x % sum === 0;
}

function solution2(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0); //초기값 0을 설정하지 않으면 초기 acc는 string이므로 초기값 0을 설정해주거나 마지막에 더할때 Number()를 씌워줘야 한다
  return x % sum === 0;
}
