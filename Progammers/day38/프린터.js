// function solution(priorities, location) {
//   const list = [...priorities];
//   priorities.sort((a, b) => b - a);
//   let order = 0;
//   for (let i = 0; i < priorities.length; i++) {
//     order++;
//     priorities.shift();
//     if (priorities[i] == list[location]) {
//       order += priorities.length + location;
//       break;
//     }
//   }

//   answer = order - 1;
//   console.log(answer);
//   return answer;
// }

// function solution(arr, idx) {
//   const last = [...arr];
//   let lastLength = last.length;
//   let answer = 0;
//   while (Math.max(...arr) !== last[idx]) {
//     const max = Math.max(...arr);

//     let spliced = arr.splice(arr.indexOf(max));

//     console.log(spliced, arr);

//     newArr = spliced.concat(arr);
//     console.log(newArr);
//     while (newArr[0] == max) {
//       answer++
//       newArr.shift();
//     }
//     arr = newArr;
//   }
//   console.log(answer)

//   return answer+1
// }

function solution(arr, idx) {
  const priorities = arr.map((priority, i) => {
    return { idx: i, priority: priority };
  });
  let answer = 0;
  let resultPrinted = false;
  while (!resultPrinted) {
    let shifted = priorities.shift();
    let canPrint = true;
    if (priorities.some((el) => shifted.priority < el.priority))
      canPrint = false;
    if (canPrint) {
      answer++;
      if (shifted.idx === idx) {
        resultPrinted = true;
      }
    } else {
      priorities.push(shifted);
    }
  }

  return answer;
}

// solution([2, 1, 3, 2], 2);
// solution([1, 1, 9, 1, 1, 1], 0)
// solution([2, 1, 2, 1, 2, 1, 2, 1, 2],1) //6
