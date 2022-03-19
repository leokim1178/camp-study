
let post = "2021년 05월 02일"
let today= new Date()
let yesterday= new Date(2021,5,2)

let dif=today.getTime()-yesterday.getTime()
let difd= Math.floor(dif/(1000*60*60*24))

let difm=Math.round(dif/(1000*60*60*24*30))

let dify=Math.round(dif/(1000*60*60*24*365))


console.log("게시한지 "+difd+"일이 지났습니다")
console.log("게시한지 약 "+difm+"개월이 지났습니다")
console.log("게시한지 약 "+dify+"년이 지났습니다")







// let today = new Date()
// today

// let dd =today.getDate()
// let mm =today.getMonth()+1
// let yyyy =today.getFullYear()
// let fulldate= today.getTime()
// fulldate
// dd
// mm
// yyyy

// post=post.split(" ")
// post

// for(i=0; i<post.length;i++){
//     post[i]=post[i].split("")
//     post[i].splice(-1,1)
//     post[i]=Number(post[i].join(""))

// }
// post

// console.log((yyyy-post[0])+"년"+(mm-post[1])+"월"+(dd-post[2])+"일이 지났습니다.")
















