/*
    두 배열의 차이

    두 개의 배열 nums1, nums2가 주어집니다.
    조건에 맞는 이중배열 answer를 리턴해주세요.
    
    - answer[0]은 nums2 배열에 존재하지 않는 nums1의 요소들을 담고 있습니다.
    - answer[1]은 nums1 배열에 존재하지 않는 nums2의 요소들을 담고 있습니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------
    case1:
        nums1 = [1, 2, 3]
        nums2 = [2, 4, 6]

    case2:
        nums1 = [1, 2, 3, 3]
        nums2 = [1, 1, 2, 2]
    
    ------------------------------
    output
    ------------------------------
    case1:
        [[1, 3], [4, 6]]

    case2:
        [[3], []]
*/

function differenceOfTwoArrays(nums1, nums2) {
  const answer = [[], []];

  // 여기에서 작업하세요.
  for (i = 0; i < Math.max(nums1.length, nums2.length); i++) {
    if (!nums2.includes(nums1[i]) && !answer[0].includes(nums1[i])) {
      answer[0].push(nums1[i]);
    }
    if (!nums1.includes(nums2[i]) && !answer[1].includes(nums2[i])) {
      answer[1].push(nums2[i]);
    }
  }

  return answer;
}

module.exports = differenceOfTwoArrays;
