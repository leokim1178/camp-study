function getToday(){

    //여기서 오늘날짜로 만들기!!
    const goodmorning=new Date()
    const yyyy= goodmorning.getFullYear()
    const mm=goodmorning.getMonth()+1
    const dd=goodmorning.getDate()
    const hour=String(goodmorning.getHours()).padStart(2,"0")
    const min=String(goodmorning.getMinutes()).padStart(2,"0")
    const sec=String(goodmorning.getSeconds()).padStart(2,"0")

    const mrclock=`오늘은 ${yyyy}년 ${mm}월 ${dd}일 ${hour}:${min}:${sec} 입니다`
    return mrclock
}

console.log(getToday())