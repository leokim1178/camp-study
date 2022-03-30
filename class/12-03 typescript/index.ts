//타입 스크립트는 타입을 추론하는 기능이 있다
let aab = "하이요";
aab = 3;

//타입 명시
let aaa: string = "안녕하세요";
aaa = 10;

//문자타입
let ccc: string;
ccc = "반가워요";
ccc = 3;

//숫자타입
let ddd: number;
ddd = "안돼";

//불린타입
let eee: boolean;
eee = false;
eee = "false"; //true로 작동한다

//배열타입
let fff: number[] = [1, 2, 3, 4, 5, 6, 7, "안녕하세요"];
let ggg: string[] = ["철수", "영희", "훈이", 13];
let hhh: (number | string)[] = [1, 2, "훈이는", "훈발놈"];

//객체타입

interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string; //? 물음표의 의미 : 없을 수도 있고 나중에 생길수도 있다
  banana?: string;
}

let profile: IProfile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};

profile.age = "8살"; //이것도 타입을 추론한다 명시를 안하더라도 추론이 된다
profile.school = 123;

profile.banana = "asdg";

// 함수타입

const add = (money1: number, money2: number, unit: string) => {
  //타입이 any면 그냥 자바스크립트라고 보면 됨
  return money1 + money2 + unit;
};
add(1000, 2000, "원");
add(1000, "2000", "원");

interface Board {
  writer: string;
  title?: string;
  contents: string;
}

const updateBoardInput1: Board = {
  writer:
};


const updateBoardInput2: Board = {
  writer
};
