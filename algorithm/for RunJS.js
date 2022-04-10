function solution(board, moves) {
 let arr = []
  for(k=0;k<moves.length; k++){
    console.log(moves[k])
    
    for(i=0;i<board.length;i++){

					if(board[i][moves[k]-1]){
            if(board[i][moves[k]-1]!==arr[k-1]){
                          board[i][moves[k]-1]=0

            }else{
            arr.push(board[i][moves[k]-1])
            board[i][moves[k]-1]=0
            break}
          }
    }
  }
  
  
  	console.log(arr)
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

[4,3,1,1,3,2,4]

// board[i][moves[k]-1]!==arr[k-1]