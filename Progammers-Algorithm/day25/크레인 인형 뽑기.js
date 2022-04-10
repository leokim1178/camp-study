function solution(board, moves) {
  let arr = [];
  let answer = [];
  for (k = 0; k < moves.length; k++) {
    for (i = 0; i < board.length; i++) {
      if (board[i][moves[k] - 1]) {
        arr.push(board[i][moves[k] - 1]);
        board[i][moves[k] - 1] = 0;
        break;
      }
    }

    for (j = 0; j < arr.length; j++) {
      if (arr[j] == arr[j + 1]) {
        answer.push(arr.splice(j, 2));
      }
    }
  }

  return answer.flat().length;
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
); //4
