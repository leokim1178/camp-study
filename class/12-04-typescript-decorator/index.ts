function zzz(aaaa) {
  console.log("================");
  console.log(aaaa);
  console.log("================");
}

@zzz
class Appcontroller {}

//데코레이터는 함수였다
//======================================================
//======================================================
//public
class Aaa {
  constructor(public mypower) {
    this.mypower = mypower;
  }

  ggg() {
    console.log("안녕하세요");
  }
}
const aaa = new Aaa(50);
aaa.mypower = 5;
//======================================================
//======================================================
//private
class Bbb {
  constructor(private mypower) {
    this.mypower = mypower;
  }

  ggg() {
    this.mypower = 10;
  }
}
const bbb = new Bbb(50);
bbb.mypower; //함수 안에서 밖에 못 사용한다
//======================================================
//======================================================
//readonly
class Ccc {
  constructor(readonly mypower) {
    this.mypower = mypower;
  }

  ggg() {
    this.mypower = 10; //읽기 전용...할당 등 조작 불가
  }
}
const ccc = new Cbb(50);
