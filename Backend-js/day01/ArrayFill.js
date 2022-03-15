// 핸드폰 번호가 담긴 문자열 phone이 주어질 때,
// 뒤의 4자리를 "*"로 바꿔서 리턴해주세요.

function solution(phone) {
  let arr = phone.split(''); //split은 ()안에 들어가는값을 기준으로 배열을 나눈다
  console.log(arr)
  const result = arr.fill('*',7).join("") //join은 ()안에 들어갈 문자를 기준으로 합친다
  return result
  // 여기에서 작성해주세요.
  
}

console.log("결과", solution('01012345678')); // "0101234****"
