//new Set()



//1.자동으로, 중복되는 데이터를 제거
//2. 타입은 객체, 겉으로는 배열로 사용이 가능하다
const arr= new Set()
typeof arr //'object'

arr.add(1)  //{1, __proto__}
arr.add(2)  //{1,2, __proto__}

arr.has(1) //true
arr.has(3) //false

arr.size // 2(length와 비슷한 기능)

arr.delete(1) //true(삭제완료)
arr.delete(3) // false(제거 못했다는 뜻)

arr.clear //데이터 초기화

arr.forEach(el=>{
  console.log(el)})
//데이터 반복
arr=Array.from(arr) //배열로 변환
arr = [...arr]
console.log(arr)
arr.reduce((acc,cur)=>{
  
})
//new Set()으로 중복제거 후 [...]로 중복제거