/*
    뒤죽박죽

    문자열 str과 숫자를 요소로 가진 배열 arr이 주어집니다.
    문자열 str과 배열 arr은 무작위로 섞여 있습니다.
    배열 arr은 올바르게 정렬된 str의 각 문자 index를 요소로 가집니다.

    예를 들어,
    str = 'campcode'
    arr = [4, 5, 6, 7, 0, 1, 2, 3]
    위와 같은 값이 입력된다면,
    올바르게 정렬된 문자열 str은 'codecamp'가 됩니다.

    뒤섞인 문자열 str과 index를 담은 배열 arr을 입력 받아,
    올바르게 정렬된 문자열을 리턴해주세요.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      topsyTurvy('campcode', [4, 5, 6, 7, 0, 1, 2, 3])

    case2:
      topsyTurvy('bsktcaurs', [4, 8, 7, 1, 6, 2, 5, 3, 0])

    ------------------------------
    output
    ------------------------------

    case1:
      'codecamp'

    case2:
      'starbucks'

*/

function topsyTurvy(str, arr) {
  let answer = "";
  for (i = 0; i < arr.length; i++) {
    let idx = arr.indexOf(i);
    answer += str[idx];
  }
  return answer;
}

module.exports = topsyTurvy;
