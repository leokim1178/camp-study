//for문으로 풀기
function solution(num) {
    let answer = 0;
    
    for(let i=0; i<500;i++){
        if(num===1){
        return answer
      }
      answer++;
      if(num %2===0){
        num/=2
        
          }else{
          num=(num*3)+1;
        }
        }
      console.log(answer,num)
      return num!==1?-1 :answer
    }

// reduce로 풀기

function solution(num) {
    let answer=0;
    const countReduce= new Array(500)
                        .fill(1)
                        .reduce((acc,cur)=>{
                            if(acc!==1){
                            answer++
                            console.log(acc,answer)
                            return acc%2===0
                            ? acc/2
                            : (acc*3)+1
                            }else{
                                return 1
                            }
                        },num)
    return countReduce !==1?-1 :answer

}