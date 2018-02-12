import Foo, { x, y, z } from './reExports'

describe('testing re-exports', () => {
  it('will never get to this method', () => {
    expect(x).toBe(1)
  })
})