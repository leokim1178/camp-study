function countLetter(str) {
	let count = 0;
  let newStr= str.split("")
  for(i=0;i<newStr.length;i++){
    if(newStr[i]==='a'){
      count=count+1
    }
  }
  console.log(count)
  
}



countLetter("I am from Korea")                         // 2

countLetter("A day without laughter is a day wasted.") // 6




























