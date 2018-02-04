const test = require('ava');
const haveFun = require('../index').haveFun;



test("log content:Have Fun!!!", t => {
    haveFun();
    t.pass('Yes');
});