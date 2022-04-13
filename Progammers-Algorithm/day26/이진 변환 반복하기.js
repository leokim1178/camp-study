function solution(s) {
  let zero = 0;
  let result = 0;
  let string = s;

  for (let k = 0; k < 10; k++) {
    let lng = string.split("").filter((x) => x != 0).length;
    zero += string.length - lng;
    let tr = "";
    for (let i = 0; lng / 2 ** i > 0; i++) {
      tr += lng % 2;
      lng = Math.floor(lng / 2);
    }
    string = tr.split("").reverse().join("");
    result++;

    if (string == 1) {
      break;
    }
  }

  return [result, zero];
}
