// 객체를 순회하며 key가 title이거나
// name일 경우 value를 대문자로 바꿔주세요.

const obj = {
  title: 'The Title',
  name: 'Jane',
  contents: 'Nothing to say'
};

const result=Object.entries(obj);
// console.log(result)
//[  [ 'title', 'The Title' ],  [ 'name', 'Jane' ],  [ 'contents', 'Nothing to say' ]]

for(let element of result){
  if(element[0]!=='contents'){
    element[1]=element[1].toUpperCase();
  }
  
}

let obj2= result

// for (let key in obj) {
//   if(key!=='contents'){
//   obj[key]=obj[key].toUpperCase();
//   }
// }

console.log(result);
// { 
//   title : "THE TITLE",
//   name : "JANE",
//   contents: "Nothing to say"
// }
