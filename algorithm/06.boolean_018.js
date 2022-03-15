function boolean(input1, input2) {
	if(input1===true||input2===true) {
    console.log(true)
  }else if(input1===false&&input2===false){
    console.log(false)
  }
}

boolean(true, false) // true
boolean(false, true) // true
boolean(false, false) // false