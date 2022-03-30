function solution(n) {
  //Reduce 사용 풀이
  const answer = n
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);
  return answer;
  //String() 은 null과 undefined에 대헤서도 잘 동작하는 반면,
  // toString() 사용시 에러가 발생한다.
  // Number.prototype.toString() : toString() 메서드는 특정 진수(2~32까지의)로 객체를 표현한 문자열을 반환
  // String() - 문자로 형변환하여 반환
}
