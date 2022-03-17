let numberData = [1, "가나", true, 126, "false", 100 ] 

for(i=0; i<=numberData.length; i++){
    if(typeof numberData[i]!== "number"){
        numberData.splice(i,1)
        console.log(numberData)
    }
}
console.log(numberData)