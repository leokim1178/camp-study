/*
    팬그램

    팬그램(pangram)이란, 알파벳의 모든 문자(A~Z)를 사용해 만든 문장을 뜻합니다.
    공백이 존재하지 않는 문자열 str이 주어집니다.
    해당 문자열이 팬그램인지 판별하여 팬그램이라면 true를, 아니라면 false를 리턴해주세요.
    
    - 문자열 str은 공백, 특수문자 등이 존재하지 않는 순수 알파벳으로 이루어진 문자열입니다.
    - 문자열 str은 소문자로만 구성되어 있습니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------
    case1:
        isPangram('thequickbrownfoxjumpsoverthelazydog')

    case2:
        isPangram('codecamp')
    
    ------------------------------
    output
    ------------------------------
    case1:
        true

    case2:
        false
*/

function isPangram(str) {
  let set = new Set(str);
  return set.size == 26;

  // 여기에서 작업하세요.
}

module.exports = isPangram;
