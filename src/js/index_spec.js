var tape = require('tape');

var index = require('./index');

tape('app', function (t) {

    t.equals('test', 'test', '"test" should equal "test"');
    t.end();
});
