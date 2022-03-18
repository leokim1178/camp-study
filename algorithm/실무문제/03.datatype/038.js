let stringData = [1, "가나", true, 126, "false" ] 

console.log(stringData[0].toString())


for(let i=0; i<stringData.length;i++){
    stringData[i]=stringData[i].toString()
    // element=element.toString()

}


console.log(stringData) //["1", "가나", "true", "126", "false"]
