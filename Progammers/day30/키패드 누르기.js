function solution(numbers, hand) {
  const current = {
    left: 10,
    right: 12,
  };
  const leftNum = [1, 4, 7];
  const rightNum = [3, 6, 9];
  const answer = numbers
    .map((el, i) => {
      if (leftNum.includes(el)) {
        current["left"] = el;
        return "L";
      } else if (rightNum.includes(el)) {
        current["right"] = el;
        return "R";
      } else {
        const locationObj = { ...current };

        for (let hand in locationObj) {
          //0번을 눌렀을 때 위칫값은 11로 예외 처리
          el = el === 0 ? 11 : el;
          //거릿값
          let finger = Math.abs(el - locationObj[hand]);
          // 거리 차이가 3칸 이상일 때는 위 아래로 이동할 수 있다
          if (finger >= 3) {
            finger = Math.trunc(finger / 3) + (finger % 3);
          }
          locationObj[hand] = finger;
        }

        if (locationObj["left"] === locationObj["right"]) {
          current[hand] = el;
          return hand === "left" ? "L" : "R";
        } else {
          if (locationObj["left"] > locationObj["right"]) {
            // 오른쪽 손가락이 더 가까운 경우
            current["right"] = el;
            return "R";
          } else {
            // 왼쪽 손가락이 더 가까운 경우
            current["left"] = el;
            return "L";
          }
        }
      }
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, "");
  console.log(answer);
  return answer;
}

solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
