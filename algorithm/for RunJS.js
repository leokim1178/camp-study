function seatNumber(row, col) {
  let answer = Array.from(Array(row), () => Array(col).fill(1));
  console.log(answer)
  for(i=0;i<row; i++){
    for(j=0; j<col; j++){
			if(j=0){
      answer[i][j]+=i+j+col*i}
      else{
        answer[i][j]
      }
    }
  }
  console.log(answer)
  
}





seatNumber(3,5)