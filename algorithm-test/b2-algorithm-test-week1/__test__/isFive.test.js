const isFive = require("../src/02_isFive");

describe("수를 입력받아 5와 같으면 true를, 그렇지 않으면 false를 리턴해야 합니다", () => {
  describe("숫자를 입력받을 때", () => {
    test("5를 입력받은 경우 true를 리턴해야 합니다", () => {
      expect(isFive(5)).toEqual(true);
    });

    test("7을 입력받은 경우 false를 리턴해야 합니다", () => {
      expect(isFive(7)).toEqual(false);
    });

    test("2를 입력받은 경우 false를 리턴해야 합니다", () => {
      expect(isFive(2)).toEqual(false);
    });
  });

  describe("숫자가 아닌 것을 입력받을 때", () => {
    test("문자열을 입력 받은 경우 false를 리턴해야 합니다", () => {
      expect(isFive("string")).toEqual(false);
    });

    test("배열을 입력 받은 경우 false를 리턴해야 합니다", () => {
      expect(isFive(["hello", "world"])).toEqual(false);
    });
  });
});
