import { describe } from 'riteway'

function sayHi() {
  return 'Hi'
}

describe('reducer', async assert => {
  assert({
    given: 'no arguments',
    should: 'return the valid initial state',
    actual: sayHi(),
    expected: 'Hi'
  })
})