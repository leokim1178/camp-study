function findGold(arr) {
let result=[]

let n=0
  for(i=0;i<arr.length; i++){
    for(j=0;j<arr[i].length; j++){
      	const Gold=new Array(2)
        Gold[0]=i
        Gold[1]=j
      if(arr[i][j]==="G"){
        n++
        console.log(n)
        
        result.push(Gold)
        console.log(Gold)  
      }
    }
  }
  if(n==1){
  }
  return result
  // 여기에서 작업하세요.
}



case1=[
            ["N", "N", "N", "N"],
            ["N", "G", "N", "N"],
            ["N", "N", "N", "N"],
            ["N", "N", "N", "N"]
      ]
case2=[
            ["N", "G", "N"],
            ["N", "N", "N"],
            ["N", "N", "G"]
      ]

findGold(case1)
findGold(case2)

//     case1:
//         [ 1, 1 ]

//     case2:
//         [ [ 0, 1 ], [ 2, 2 ] ]