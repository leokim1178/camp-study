function money(B02member) {
  const table1 = ["태영", "여진", "성민", "다혜"];
  const table2 = ["병집", "주비", "현목", "지웅"];
  if (table1.includes(B02member)) {
    return `458302-01-249991 국민으로 ${64000 / 4 + 15000 / 8} 원 보내주세요`;
  } else if (table2.includes(B02member)) {
    return `458302-01-249991 국민으로 ${93000 / 4 + 15000 / 8} 원 보내주세요`;
  }
}

console.log(money("태영"));
