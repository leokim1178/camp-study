const differenceOfTwoArrays = require('../src/differenceOfTwoArrays');

describe('differenceOfTwoArrays', () => {
  test(`should return [ [ 1, 3 ], [ 4, 6 ] ]`, () => {
    expect(differenceOfTwoArrays([1, 2, 3], [2, 4, 6])).toEqual([
      [1, 3],
      [4, 6],
    ]);
  });

  test(`should return [ [ 3 ], [] ]`, () => {
    expect(differenceOfTwoArrays([1, 2, 3, 3], [1, 1, 2, 2])).toEqual([
      [3],
      [],
    ]);
  });
});
