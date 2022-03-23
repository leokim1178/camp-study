function takeRank(arr){  
    let n=arr.length;
    let answer=Array.from({length:n}, ()=>1); // 배열의길이, 1로 초기화
    console.log(answer)
    
    for(let i=0; i<n; i++){
      for(j=0; j<n; j++){
        if(arr[j]>arr[i])
        { console.log(arr[j],arr[i])
          answer[i]++
        	console.log(answer)
        };
      }
    }
    return answer;
  }

  let arr=[87, 89, 92, 100, 76];
  console.log(takeRank(arr));