import test from 'ava'
import {min} from '../src'

test('find the minimum value of list', t => {
  const list = [22, 1, 99, 45]
  const result = min(list)
  t.deepEqual(1, result)
})
