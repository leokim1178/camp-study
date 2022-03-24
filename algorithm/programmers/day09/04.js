//멘토 풀이
function solution1(arr, divisor) {
    const answer= arr.filter(num=>{
        return num%divisor===0
    })
    return answer.length===0
    ?[-1]
    :answer.sort((a,b)=>a-b)
}



//내 풀이
function solution2(arr, divisor) {
    let answer=[]  
    for(i=0; i<arr.length; i++){
        if(arr[i]%divisor==0){
          answer.push(arr[i])}
        }
    answer.sort((a,b)=>{return a-b})
    if(answer.length==0){answer.push(-1)}
      return answer
  }
  