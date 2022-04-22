/*
  어떤 숫자 num이 주어졌을 때, 
  Number.isInteger()를 이용해
  정수라면 그대로 두고,
  실수라면  Math.ceil()을 이용해 올림을 해주는 함수 solution을 완성해주세요.
*/
function solution(num) {
  if(Number.isInteger(num)){
    return num
  }else{
    return Math.ceil(num)
  }
}
//Math.ceil은 올림 함수
//Math.floor은 내림 함수
//Math.round는 반올림함수
//0은 false,!0은 true로 판별된다, !!'' 이렇게 빈문자열도 boolean값을 따지자면 false다
//0이외의 값은 true  !!12321 이렇게 0을 제외한 숫자에 !!를 갈기면 true값이 나온다

console.log(solution(3)); // 3
console.log(solution(3.3)); // 4
