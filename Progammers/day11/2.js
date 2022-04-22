function solution(arr) {
    
    result = arr.filter(x=>x>Math.min(...arr))
    return result.length==0
    ? [-1]
    : result
    }
