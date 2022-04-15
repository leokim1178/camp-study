const vipCustomer = require('../src/vipCustomer')

describe('vipCustomer', () => {
  test('should return 9700', () => {
    expect(vipCustomer(
      [[1000,3000,2000], [700,5500,3000], [200,3700,5800]])
    ).toEqual(9700)
  })

  test('should return 6000', () => {
    expect(vipCustomer(
      [[1000,3000,2000], [100,500,600], [200,300,800]]
    )).toEqual(6000)
  })

  test('should return 4000', () => {
    expect(vipCustomer(
      [[100,600,200], [100,1800,600], [200,3000,800]]
    )).toEqual(4000)
  })
})
