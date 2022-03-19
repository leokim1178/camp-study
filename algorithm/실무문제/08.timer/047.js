let timer

function getTime(watch){
    time= watch*60
    timer=setInterval(
        ()=>{
            if(time>0){
                const minute =Math.floor(time/60)
                const second = String(time%60).padStart(2,"0")
                time-=1
                console.log( minute+":"+second+ " 남았습니다" )
            }else{
                clearInterval(timer)
                console.log("종료")
            }

},1000)}

getTime(1)