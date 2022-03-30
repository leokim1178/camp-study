function solution1(s) {
  return s.split("").sort().reverse().join("");
}

function solution2(s) {
  return Array.from(s)
    .sort((a, b) => {
      return a > b ? -1 : 1;
    })
    .join("");
}
