const TodoList = [
    { work: "청소", finish: false },
    { work: "미적분 과제", finish: true  },
    { work: "논문 해석", finish: false },
    { work: "알고리즘 풀기", finish: false },
    { work: "미니홈피 제작", finish: false },
    { work: "Blog 글 쓰기", finish: true }
]
const finished=(arr)=>{
    let num=0;
    for(let element of arr){
        if(element.finish===true){
            num+=1;
        }
    }
    let result= Math.round((num/arr.length)*100)
    console.log(`총 ${result}% 진행하셨습니다.`)
}

finished(TodoList)


// const finished=TodoList.filter(cb()).length















