function reduce_05(arr, initialValue) {
  initialValue != undefined ? (acc = initialValue) : (acc = []);
}
reduce_05(
  [
    { name: "Aiden", age: 33 },
    { name: "Gray", age: 52 },
    { name: "Junny", age: 9 },
    { name: "Oliver", age: 11 },
  ],
  {}
);

reduce_05(
  [
    { name: "Aiden", age: 33 },
    { name: "Gray", age: 52 },
    { name: "Junny", age: 9 },
    { name: "Aaron", age: 52 },
    { name: "Oliver", age: 11 },
  ],
  {}
);
