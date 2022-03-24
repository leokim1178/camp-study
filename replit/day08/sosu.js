


const arr=[32,55,62,20,250,370,200,30,10]


const isPrime= (num)=>{
  for(let i=2; i<=num; i++){
    if(num===1) return false
    if(num%i===0) return false
  }
	return true
}

const result=[]

result=arr.forEach((ele)=>{
  reverseNum=Number(String(ele).split("").reverse().join(""))

  if(isPrime(reverseNum)){
      result.push(reverseNum)
  }
})

console.log(result)
