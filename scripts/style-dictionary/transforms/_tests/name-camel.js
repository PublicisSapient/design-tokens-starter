const test = require('ava');
const arrayToCamelcase = require('../name-camel');

const value = {
    attributes: {
        identity: {
            prefix: 'one',
            name: 'two-three',
        },
    },
};

test('Should return a camelCase string', (t) => {
    t.is(arrayToCamelcase(value), 'oneTwoThree');
});
