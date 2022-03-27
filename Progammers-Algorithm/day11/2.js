function solution(arr) {
    
    result = arr.filter(x=>x>Math.min(...arr))
    if(result.length==0){
     return [-1]
    }else{
      return result
    }
    
    
}