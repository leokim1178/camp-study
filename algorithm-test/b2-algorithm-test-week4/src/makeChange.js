/*
    거스름돈

    현금만을 사용하는 매점의 점원인 당신은
    현재 매장에 동전 밖에 남지 않은 것을 확인했습니다.
    손님들이 몰려오고 있고, 당신은 각각의 손님에게 최소 개수의 동전만을 사용해 거스름돈을 전달해야합니다.

    현재 가지고 있는 동전은 1원, 5원, 10원, 50원, 100원, 500원,
    이상 여섯개 종류가 있습니다.
    인자로 받는 change는 거슬러주어야 하는 액수입니다.
    최소 개수의 동전을 사용해 주어진 change와 같은 값을 만들고
    사용된 동전의 개수를 리턴해주세요.

    예를 들어 change가 4600원이라면,
    500원짜리 9개, 100원짜리 1개, 최소 10개로 완성되기 때문에
    숫자 10을 리턴합니다.

    - number 타입을 리턴해야합니다.
    - change는 1이상 100000 이하의 정수입니다. (1 <= change <= 100000)

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      4350

    case2:
      2000
    
    ------------------------------
    output
    ------------------------------

    case1:
      12

    case2:
      4
    
*/

function makeChange(change) {
  if (change % 500 == 0) {
    return change / 500;
  } else if ((change % 500) % 100 == 0) {
    return Math.floor(change / 500) + (change % 500) / 100;
  } else if (((change % 500) % 100) % 50 == 0) {
    return (
      Math.floor(change / 500) +
      Math.floor((change % 500) / 100) +
      ((change % 500) % 100) / 50
    );
  } else if ((((change % 500) % 100) % 50) % 10 == 0) {
    return (
      Math.floor(change / 500) +
      Math.floor((change % 500) / 100) +
      Math.floor(((change % 500) % 100) / 50) +
      (((change % 500) % 100) % 50) / 10
    );
  } else if (((((change % 500) % 100) % 50) % 10) % 5 == 0) {
    return (
      Math.floor(change / 500) +
      Math.floor((change % 500) / 100) +
      Math.floor(((change % 500) % 100) / 50) +
      Math.floor((((change % 500) % 100) % 50) / 10) +
      ((((change % 500) % 100) % 50) % 10) / 5
    );
  } else if ((((((change % 500) % 100) % 50) % 10) % 5) % 1 == 0) {
    return (
      Math.floor(change / 500) +
      Math.floor((change % 500) / 100) +
      Math.floor(((change % 500) % 100) / 50) +
      Math.floor((((change % 500) % 100) % 50) / 10) +
      Math.floor(((((change % 500) % 100) % 50) % 10) / 5) +
      (((((change % 500) % 100) % 50) % 10) % 5)
    );
  }

  // 여기에서 작업하세요.
}

module.exports = makeChange;
