/*
    문자열 패턴

    문자열 pattern과 str이 주어집니다.
    두 문자열이 같은 패턴으로 반복되는지 확인한 뒤,
    같은 패턴일 경우 true를,
    패턴이 다를 경우 false를 리턴해주세요.

    - 문자열 pattern은 공백이 존재하지 않습니다.
    - 문자열 str은 단어 사이에 공백이 존재합니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      const pattern = 'abba'
      const str = 'dog cat cat dog'
      stringPattern(pattern, str)

    case2:
    const pattern = 'abcaba';
    const str = 'cup ice coffee cup ice coffee';
      stringPattern(pattern, str)
    
    ------------------------------
    output
    ------------------------------

    case1:
      true

    case2:
      false
    
    * Map 객체와 그 메소드를 활용해 보세요!
*/
function stringPattern(pattern, str) {
  let newPat = pattern.split("");
  let newStr = str.split(" ");

  if (newPat.length !== newStr.length) {
    return false;
  }

  let formap = [];
  for (i = 0; i < newPat.length; i++) {
    formap.push([newPat[i], newStr[i]]);
  }

  let map = new Map(formap);
  console.log(map);

  for (let i = 0; i < newPat.length; i++) {
    if (map.get(newPat[i]) !== newStr[i]) {
      return false;
    }
  }

  return true;
}

module.exports = stringPattern;
