function sort_02(arr, sortType) {
  function HoF(a, b, sortType) {
    if(a==b) return 0
    return sortType ? a - b : b - a;
  }
  console.log(HoF(1,0))
  let answer = new Array(arr.length);
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      HoF(arr[i], arr[j]);
    }
  }
}


sort_02([10, 4, 55, 22, 1], true)