const addDash = require('../src/addDash');

describe('addDash', () => {
  test(`should return 'seoul-la-arizona'`, () => {
    expect(
      addDash('seoullaarizona')
    ).toEqual('seoul-la-arizona');
  });

  test(`should return 'toast-toast-toast'`, () => {
    expect(
      addDash('toasttoasttoast')
    ).toEqual('toast-toast-toast');
  });
});
