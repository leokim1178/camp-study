function makeOdd(num) {
	let str = '';
	for(i=0;i<=num;i++){
    if(i%2==1){
      str=str.concat(`${i}`)
    }
  }
  console.log(str)
}

makeOdd(5) // 135
makeOdd(7) // 1357


























