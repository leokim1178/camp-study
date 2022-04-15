/*
    filter

    filter 메소드는 주어지는 배열 데이터의 길이만큼 반복 실행합니다.
    그 과정에서 콜백함수가 리턴하는 결과값이 true 인 경우에만 배열의 요소를 새로운 배열에 담아서 리턴합니다.

    숫자 데이터가 담긴 배열 arr과 콜백 함수 callBack이 주어집니다.
    arr을 callBack에 적용시켜 true를 리턴하는 경우의 데이터만을 새로운 배열에 담아 리턴해주세요.

    입출력 예시
    ------------------------------
    input
    ------------------------------
    case1:
        const arr = [1,2,3,4,5,6]
        filter(arr, (val) => val % 2 === 0))

    case2:
        const arr = [1,2,3,4,5,6]
        filter(arr, (val) => val % 2 !== 0)
    

    ------------------------------
    output
    ------------------------------
    case1:
        [ 2, 4, 6 ]

    case2:
        [ 1, 3, 5 ]
*/

function filter(arr, cb) {
    return arr.filter((val)=>{
        return cb(val)
    })
  // 여기에서 작업하세요.
}

module.exports = filter
