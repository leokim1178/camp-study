
function days(month) {
	if(month===2){
    console.log("28일")
  }else if(month%2===0&&month!==8) {
    console.log("30일")
  }else if(month%2===1||month===8){
    console.log("31일")}
}

days(1) // 31
days(2) // 28
days(4) // 30


// 1월 : 31일
// 2월 : 28일
// 3월 : 31일
// 4월 : 30일
// 5월 : 31일
// 6월 : 30일
// 7월 : 31일
// 8월 : 31일
// 9월 : 30일
// 10월 : 31일
// 11월 : 30일
// 12월 : 31일








