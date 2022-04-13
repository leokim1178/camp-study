

function solution(s) {
  let zero = 0
  let result = 0
	let string = s
  
  for(let k=0;k<5;k++){
	let lng=string.split("").filter(x=>x!=0).length
  zero += string.length-lng
  let tr = ""
  for(let i=0; lng/(2**i)>0;i++){
    tr +=lng%2
    lng = Math.floor(lng/2)
  }
  s= tr.split('').reverse().join("")
   result ++   
   
    if(s==0){break}
  
  }
  
  
   console.log(result)
  
}










solution("110010101001")
// solution("01110")
// solution("1111111")