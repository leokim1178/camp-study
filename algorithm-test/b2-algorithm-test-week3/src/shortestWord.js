/*
    짧은 단어 찾기

    다양한 속성의 요소가 담긴 배열이 주어집니다.
    배열 내의 요소 중에서 가장 짧은 문자열을 찾아 리턴해야합니다.

    - 요소의 타입은 String이 아닐 수도 있습니다.
    - String 타입을 리턴해야합니다.
    - 주어진 배열 내에 문자열이 존재하지 않는다면, 빈 문자열을 리턴해야합니다.
    
    입출력 예시
    ------------------------------
    input
    ------------------------------

    [ 123, 'codecamp', true, 'code' ]

    ------------------------------
    output
    ------------------------------

    'code'

*/

function shortestWord(arr) {
  let length=[]
  for(i=0; i<arr.length;i++){
    if(typeof arr[i]==='string'){
    length.push(String(arr[i]).length)
    console.log(length)}
  }
  arr.forEach((x,i)=>{
  if(typeof arr[i]==='string'&&x.length===Math.min(...length)){
  answer =String(x)
  }})
  return answer
}

module.exports = shortestWord;