//assignment
function vote(str){
  // 아래에 코드를 작성해주세요.

  let set = new Set(str)
  let arr= [...set]
  let obj={}
   
  
  for(i=0;i<arr.length;i++){
      obj[arr[i]]=0
    for(j=0; j<str.length;j++){
      if (str[j]===arr[i]){
        obj[arr[i]]++
        
      }
    }  
  }
  
  let Max=Math.max(...Object.values(obj))
  Max
  return Object.keys(obj).find(key => obj[key] === Max );
}

// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
module.exports = vote;