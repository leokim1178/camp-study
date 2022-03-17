function bigNum(str) {
	let biggest = Number(str[0]);
  for(i=0;i<str.length;i++){
    if(Number(str[i])>biggest){
      biggest=Number(str[i])
    }  
  }
  
   console.log(biggest)
  
}
bigNum("12345") // 5
bigNum("87135") // 8


// function bigNum(str) {
// 	let biggest = 0;
//   let newStr= str.split("")
//   let num=[]; 
//   for(i=0;i<newStr.length;i++){
//   	num[i] = Number(newStr[i])
//   }
//   biggest = Math.max(...num)
//   console.log(biggest)
  
// }
// bigNum("12345") // 5
// bigNum("87135") // 8

































