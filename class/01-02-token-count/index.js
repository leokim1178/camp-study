
function getToken(mycount){
    undefined //비어있는것
    null //일부러 비워놓은것

    if(mycount===undefined){
        console.log("똑바로 입력해 이새끼야")
        return
        
    }else if(mycount<=0){
        console.log("에러! 너무 적습니다")
        return
    }else if(mycount>10){
        console.log("에러! 너무 많습니다")
        return
    }
    
    const result =String(Math.floor(Math.random()*10**mycount)).padStart(mycount,"0")
    console.log(result)
    return result
}

getToken(6)

