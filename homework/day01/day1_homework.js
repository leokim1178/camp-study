function solution(number){
    let arr=number.split('');
    const result=arr.fill('*',8).join("")
    return result
}

console.log(solution('920324-1652461'))