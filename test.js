const { test } = require('tap')
const dependants = require('.')

test('dependants', async t => {
  const names = []
  for await (const dependant of dependants('dependants-stream-test-a')) {
    names.push(dependant)
  }
  t.deepEqual(names, ['dependants-stream-test-b'])
})
