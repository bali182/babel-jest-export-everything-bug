import { x, y, z } from './namedExports'

describe('testing named exports', () => {
  it('will be fine', () => {
    expect(x).toBe(1)
    expect(y).toBe(2)
    expect(z).toBe(3)
  })
})