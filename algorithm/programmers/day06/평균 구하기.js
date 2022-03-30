function solution(arr) {
  var hap = 0;
  for (let i = 0; i < arr.length; i++) {
    hap += arr[i];
  }
  return hap / arr.length;
}
