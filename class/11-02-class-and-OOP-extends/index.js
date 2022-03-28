const aaa= new Date()
console.log(aaa.getFullYear())
console.log(aaa.getMonth()+1)


class Monster{
    power = 10 //const let 같은 걸 붙이지 않는다
    constructor(){  //설명서
        this.power =aaa

    }
    attack=()=>{        //method
        console.log("공격하자!!")
        console.log("내 공격력은"+ this.power+" 이야!!") // 지금 만들려고 하는 객를 말함
    }

    run=()=>{
        console.log("도망가자!!")
    }
}

const mymonster1= new Monster(10)
mymonster1.attack()
mymonster1.run()

const mymonsters= new Monster(50)
mymonster2.attack()
mymonster2.run()

const loginSerive =Loginverice()
logintServies .longin()
logintServies .longin()

