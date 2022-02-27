import {sum} from 'utils'

describe('이것은 더하기에 대한것이다', () => {
  it('sums', () => {
    let result = sum(1, 2)
    //toEqual은 object에 대한 value 비교가능
    expect(result).toEqual(3)
    result = sum(3, 4)
    expect(result).toBe(7)
    expect(sum(3, 6)).toBe(9)
  })
  it('rew', () => {
    let result = sum(1, 2)
    expect(result).toBe(3)
    result = sum(3, 4)
    expect(result).toBe(7)
  })
})

describe('이것은 뺴기에 관한것이다.', () => {
  it('subs', () => {
    let result = sum(1, 2)
    expect(result).toBe(3)
    result = sum(3, 4)
    expect(result).toBe(7)
  })
})
