function topsyTurvy(str, arr) {

 let answer =""
 for(i=0; i<arr.length;i++){
   let idx= arr.indexOf(i)
   console.log(idx)
   answer +=str[idx]
 }
 return answer
 
}
  






topsyTurvy('campcode', [4, 5, 6, 7, 0, 1, 2, 3]) //'codecamp'
topsyTurvy('bsktcaurs', [4, 8, 7, 1, 6, 2, 5, 3, 0]) // 'starbucks'