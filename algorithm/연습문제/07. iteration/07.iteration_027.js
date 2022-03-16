function bigNum(str) {
	let biggest = 0;
  let newStr= str.split("")
  let num=[]; 
  for(i=0;i<newStr.length;i++){
  	num[i] = Number(newStr[i])
  }
  biggest = Math.max(...num)
  console.log(biggest)
  
}
bigNum("12345") // 5
bigNum("87135") // 8

































