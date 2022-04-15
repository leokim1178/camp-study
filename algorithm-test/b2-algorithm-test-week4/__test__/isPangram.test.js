const isPangram = require('../src/isPangram');

describe('isPangram', () => {
  test('should return true', () => {
    expect(isPangram('thequickbrownfoxjumpsoverthelazydog')).toEqual(true);
  });

  test('should return true', () => {
    expect(isPangram('packmyboxwithfivedozenliquorjugs')).toEqual(true);
  });

  test('should return false', () => {
    expect(isPangram('codecamp')).toEqual(false);
  });

  test('should return flase', () => {
    expect(isPangram('')).toEqual(false);
  });
});
