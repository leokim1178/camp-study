const reverseStr = (list)=>{
  // 아래에 코드를 작성해주세요.
  let answer = Array.from({length:list.length},x=>"");
  console.log(answer)
  list.reverse()
  
  for(i=0;i<list.length; i++){
    for(j=0;j<list[i].length; j++){
      if(list[i][j].charCodeAt()>=97){
        answer[i]+=list[i][j].toUpperCase()
      }else{
        answer[i]+=list[i][j].toLowerCase()
      }
    }
  }
  answer = answer.join(" ")
  console.log(answer)
  
  return answer;
  
}


// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
module.exports = reverseStr;

