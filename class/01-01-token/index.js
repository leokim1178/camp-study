console.log("안녕하세요")

function a(x){
    const result=Math.random()*10*x
    return result
}


function getToken(x){
    function b(x){
        const result =String(Math.floor(a(x))).padStart(x,"0")
        return result
    }

    console.log(b(x))
}



getToken(7)

function add(x,y){

    const result=x+y
    // console.log(result)
    return result
}

function minus(x,y){
    const result=x-y
    return result //함수반환, 함수종료 
    //return 아래에다 작성한 사항은 실행되지않는다
}

console.log(add(1,2)*minus(12,10))

console.log(add(2,3))