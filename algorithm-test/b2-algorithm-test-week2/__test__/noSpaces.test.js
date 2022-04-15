const noSpaces = require('../src/noSpaces')

describe('noSpaces', () => {
  test('should return "codecamp"', () => {
    expect(noSpaces('c od e cam p')).toEqual('codecamp')
  })

  test('should return "d     ev elo p"', () => {
    expect(noSpaces('d     ev elo p')).toEqual('develop')
  })

  test('should return "j av asc ri pt"', () => {
    expect(noSpaces('j av  asc ri   pt')).toEqual('javascript')
  })
})
