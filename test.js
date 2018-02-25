const {test} = require('tap')
const lib = require('./index')

test('it loaded the module and worked!', async (t) => {
  t.equal(lib.add_one(55), 56)
  t.equal(lib.add_one(66), 67)
  t.equal(lib.add_one(32), 33)
  t.end()
})

test('it can call a function from js!', async (t) => {
  t.equal(lib.callJs(), 42)
  t.end()
})
