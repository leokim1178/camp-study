
function securityNumber(str){
  // padEnd 메서드와 substr 메서드를 사용해 보세요.
  return str.padEnd(7,"*")
}

let str = "991122-1111111";
str.padEnd(7,"*")
console.log(securityNumber(str)); //'991122-*******'