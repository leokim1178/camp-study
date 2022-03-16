function makeNumber(num) {
	let str = '';
  for(i=0;i<=num;i++){
     if(i<num){
    str=str.concat(`${i}`)
    str=str.concat("-")
    }else
    str=str.concat(`${i}`)
    }
  console.log(str)
}
makeNumber(5)
makeNumber(7) // 1-2-3-4-5-6-7
























