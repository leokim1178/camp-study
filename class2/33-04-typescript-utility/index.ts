interface IProfile {
  name: string;
  age: 13;
  school: string;
  hobby?: string;
}

// interface IProfile {
//   apple: string;
// }

// // interface는 같은 이름으로 여러개를 만들 수 있다

// const a: IProfile = {
//   apple: "aaa",
// };
// 이렇게 선언병합이 된다

// 1. Partial 타입
type Mytype1 = Partial<IProfile>;
// 전부다 미필수요소 있어도 되고 없어도 된다

// 2. Required 타입
type Mytype2 = Required<IProfile>;
// 전부 다 필수 요소

// 3. Pick 타입
type Mytype3 = Pick<IProfile, "name" | "age">;
// IProfile에서 name과 age만 골라줘

// 4. Omit 타입
type Mytype4 = Omit<IProfile, "school">;
// school만 빼고 전부 다

// 5. Record 타입
type ZZZ = "aaa" | "qqq" | "rrr";
type Mytype6 = Record<ZZZ, IProfile>;
// aaa,qqq,rrr는 IProfile 타입
