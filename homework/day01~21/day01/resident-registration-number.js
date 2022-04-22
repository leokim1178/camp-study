function splitnumber(number){
    let arr=number.split('');
    return arr;
}

function errorcheck(arr){
    if(arr.length!==14){
        console.log("에러발생!!!갯수를 제대로 입력해주세요!!")
    }if(arr.includes("-")!==true){
        console.log("에러발생!!!형식이 올바르지 않습니다!!!")
    }else{
        const result=arr.fill('*',8).join("")
        return result
    }
}

function sendSecretNumber(number){
    const arr= splitnumber(number)
    const result=errorcheck(arr)
    return result
}


console.log(sendSecretNumber('920324-1038293'))