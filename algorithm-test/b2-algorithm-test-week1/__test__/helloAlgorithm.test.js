const helloalte = require("../src/01_helloAlgorithm");

describe("알고리즘 테스트 익히기", () => {
  test("함수는 항상 true를 리턴해야 합니다", () => {
    expect(helloalte()).toEqual(true);
  });
});
