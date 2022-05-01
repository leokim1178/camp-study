// prototype : 성공!
function solution(msg) {
  const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const dictionary = {};
  for (let i = 0; i < ABC.length; i++) {
    dictionary[ABC[i]] = i + 1;
  }

  let dicNum = 26;
  const answer = [];
  const split = msg.split("");

  const lastOne = split.reduce((acc, cur, i) => {
    if (dictionary[acc]) {
      if (dictionary[cur]) {
        if (dictionary[acc + cur]) {
          return acc + cur;
        }
      }
      answer.push(dictionary[acc]);
      if (dictionary[acc + cur]) {
        answer.push(dictionary[acc + cur]);
        return cur;
      } else {
        dicNum++;
        dictionary[acc + cur] = dicNum;
        return cur;
      }
    } else {
      return acc + cur;
    }
  }, "");
  console.log(dicNum);
  if (dictionary[lastOne]) {
    answer.push(dictionary[lastOne]);
  } else {
    dicNum++;
    dictionary[lastOne] = dicNum;
  }

  return answer;
}

// refactoring

function solution(msg) {
  const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const dictionary = {};
  for (let i = 0; i < ABC.length; i++) {
    dictionary[ABC[i]] = i + 1;
  }

  let dicNum = 26;
  const answer = [];
  const split = msg.split("");

  const lastOne = split.reduce((acc, cur) => {
    if (dictionary[acc]) {
      //1. 현재값,다음값,현재값+다음값이 사전에 존재하면 현재값+다음값을 넘겨준다
      if (dictionary[cur] && dictionary[acc + cur]) {
        return acc + cur;
      }
      //1-1. 현재값이 사전에 있으니 answer에 출력해준다
      answer.push(dictionary[acc]);
      if (dictionary[acc + cur]) {
        //2. 현재값,현재값+다음값이 사전에 존재하면 다음값을 넘겨준다(다음값은 다음 순번에서 사전에 등록되므로 사전등록은 하지 않는다)
        // 수정)현재값+다음값은 출력하면 안된다 현재값에 해당되는 사전의 번호만 출력한다
        answer.push(dictionary[acc + cur]);
        return cur;
      } else {
        //3. 현재값만 사전에 존재하면 현재값+다음값은 사전에 여기서 등록해줘야한다. 따라서 사전의 마지막 번호에 1을 더해서 그 값으로 사전에 등록한다.
        // 등록이 끝났으면 다음값만 그냥 넘겨준다(다음 순서에서 자동으로 등록된다)
        dicNum++;
        dictionary[acc + cur] = dicNum;
        return cur;
      }
    } else {
      //4. 아무것도 사전에 등록되지 않았으면 일단 다음값을 더해서 넘겨준다
      return acc + cur;
    }
  }, "");

  //5. 위의 reduce 함수의 최종값은 마지막 acc값 그러니까 이 현재값에 대한 처리도 해주어야하는데 array의 길이가 1짧으므로 마지막에 남은값을 push해준다
  answer.push(dictionary[lastOne]);

  return answer;
}

// refactoring
function solution(msg) {
  const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const dictionary = {};
  for (let i = 0; i < ABC.length; i++) {
    dictionary[ABC[i]] = i + 1;
  }

  let dicNum = 26;
  const answer = [];
  const split = msg.split("");

  const lastOne = split.reduce((acc, cur) => {
    if (dictionary[acc]) {
      //1. 현재값,다음값,현재값+다음값이 사전에 존재하면 현재값+다음값을 넘겨준다
      if (dictionary[cur] && dictionary[acc + cur]) {
        return acc + cur;
      }
      // 2. 현재값이 사전에 있으니 answer에 출력해준다
      answer.push(dictionary[acc]);

      // 3. 현재값만 사전에 존재하면 현재값+다음값은 사전에 여기서 등록한다. 따라서 사전의 마지막 번호에 1을 더해서 그 값으로 사전에 등록한다.
      // 등록이 끝났으면 다음값만 그냥 넘겨준다
      dicNum++;
      dictionary[acc + cur] = dicNum;
      return cur;
    } else {
      // 4. 아무것도 사전에 등록되지 않았으면(""인 상태에 대한 예외처리) 일단 현재값에 다음값을 더해서 넘겨준다
      return acc + cur;
    }
  }, "");

  //5. 위의 reduce 함수의 최종값은 마지막 acc값 그러니까 이 현재값에 대한 처리도 해주어야하는데 array의 길이가 1짧으므로 마지막에 남은값을 push해준다
  answer.push(dictionary[lastOne]);
  console.log(answer);

  return answer;
}

// solution("KAKAO");
solution("TOBEORNOTTOBEORTOBEORNOT");
// solution("ABABABABABABABAB	");
