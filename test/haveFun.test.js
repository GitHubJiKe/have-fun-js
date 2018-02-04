const test = require('ava');
const { haveFun, getInt } = require('../index');



test("log content:Have Fun!!!", t => {
    haveFun();
    t.pass('Yes');
});

test('1.01 will get 1', t => {
    t.is(getInt(1.01), 1, 'Yes');
    t.deepEqual(typeof getInt("2.00002"), "number", 'Yes');
})

