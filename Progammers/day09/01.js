//문자열 내 p와 y의 개수

//멘토 풀이
function solution(s){
    const check={}
    s.toLowerCase().split("")
      .forEach( str=>{
      check[str]===undefined
      ? check[str]=1
      : check[str]++;
      console.log(check,str)
    })
      return check.p===check.y;
  }
  
  
  solution("pPoooyY")

  //내풀이

  function solution(s){
    let p=0
    let y=0
    for(i=0; i<s.length;i++){
      if(s[i]==="p"||s[i]==="P"){
      p++}
      else if(s[i]==="Y"||s[i]==="y"){
        y++}
  }
    return p==y
  }
  