//이상한 문자 만들기

function solution(s) {
    var answer = '';

    let idx=0;// 단어별로 인덱스를 구분하기 위해 사용
    for(let i=0;i<s.length;i++){
        if(s[i]===""){
            answer+=s[i];
            idx=0;
        }else{
            answer+=idx%2===0
            ?s[i].toUpperCase()
            :s[i].toLowerCase()
            idx++
        }

    }
    return answer;
}

//method 풀이
function solution(s) {
    const answer= s.split(" ")
                    .map(str=>{
                        return str.split("").map((letter,i)=>{return i%2===0
                                                             ?letter.toUpperCase()
                                                             :letter.toLowerCase()})
                        .join("")
                    }).join(" ")
return answer
}

let s="try hello world"
console.log(solution(s))