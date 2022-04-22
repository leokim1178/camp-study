//assignment
function vote(str){
  // 아래에 코드를 작성해주세요.
    let map = new Map ();
    for(let i = 0; i<str.length; i++){
        if(map.has(str[i])){
            map.set(str[i],map.get(str[i])+1)
        } else {
            map.set(str[i], 1)
        }
    }
  let answer;
    let checker=0;

    map.forEach( (v,k,m) => {
        if(v>= checker){
            checker = v
            answer = k
        }
    })
  return answer;
  }

//
console.log(vote('BACBACCACCBDEDE'))
// 아래의 코드는 절대로 수정하거나 삭제하지 마세요.
module.exports = vote;