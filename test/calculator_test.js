const assert = require('assert')
const solution = require('../calculator.js')

describe('Check max profit', function() {
  it('should return 0 when no profit possible', function() {
    const A = [21367, 21123, 21011]
    assert.equal(solution(A), 0)
  })

  it('should return positive number when sell > buy', function() {
    const A = [21013, 21011, 21367]
    assert.equal(solution(A), 356)
  })

  it('should return the maximum possible profit', function() {
    const A = [23171, 21011, 21123, 21366, 21013, 21367]
    assert.equal(solution(A), 356)
  })
})