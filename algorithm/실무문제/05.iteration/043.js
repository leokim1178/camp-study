const myShopping = [
    { category: "과일", price: 12000},
    { category: "의류", price:10000 },
    { category: "의류", price: 20000},
    { category: "장난감", price: 9000},
    { category: "과일", price: 5000},
    { category: "의류", price: 10000},
    { category: "과일", price: 8000},
    { category: "의류", price: 7000},
    { category: "장난감", price: 5000 },
    { category: "의류", price: 10000 },
]
function myPage(a){
    let wholeprice=0;
    let count=0;
    let grade="";
    for(let i=0; i<a.length; i++){
        if(a[i].category==="의류"){
            count++;
            wholeprice+=a[i].price;

        }
    
    if(count>=5){
        grade="Gold"
    }else if(count>=3){
        grade="Silver"
    }else if(count>=0){
        grade="Bronze"
    }}
    return `의류를 구매한 횟수는 총 ${count}회 금액은 ${wholeprice}이며 등급은 ${grade}입니다.`
}

console.log(myPage(myShopping))
