const nextImages = require('./')

describe('basic functionalities', () => {
  test('be defined with no inputs', () => {
    const withImages = nextImages()
    expect(withImages).toBeDefined();
  })
})