/*
    객체 속성 추가하기

    두 개의 객체 obj1, obj2가 주어집니다.
    obj1과 obj2의 키-값 쌍을 합쳐서 리턴해주세요.

    - 추가하려는 키가 obj1에 이미 존재한다면, 기존 값을 건드리지 말아야 합니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    const obj1 = {
      a: 1,
      b: 2,
    };
    
    const obj2 = {
      b: 3,
      c: 3,
    };

    ------------------------------
    output
    ------------------------------

    { a: 1, b: 2, c: 3 }
*/

function addNew(obj1, obj2) {
  const NewObj=Object.assign(obj2,obj1)
  return NewObj
  // 여기에서 작업하세요.
}

module.exports = addNew
