/*
    하이픈 추가하기

    공백이 존재하지 않는 영어 문자열이 주어집니다.
    해당 문자열에는 연속으로 반복되는 알파벳들이 존재합니다.
    연속되는 알파벳을 탐색하고, 해당 두 알파벳 사이에 하이픈(-)을 추가한 문자열을 리턴해주세요.

    - 문자열은 모두 소문자로 구성되어 있습니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      'seoullaarizona'
    
    case2:
      'toasttoasttoast'

    ------------------------------
    output
    ------------------------------

    case1:
      'seoul-la-arizona'

    case2:
      'toast-toast-toast'

*/

function addDash(str) {
  let answer= ""
  for(i=0; i<str.length;i++){
    if(str[i]===str[i+1]){
      answer += str[i]+"-"
    }else{
      answer +=str[i]
    }
  }
  console.log(answer)
  return answer
  // 여기에서 작업하세요.
}

module.exports = addDash
