const test = require('ava');
const toUnitless = require('../size-unitless');

test('Should convert unitless string number to number', (t) => {
    t.is(toUnitless({ original: { value: '16' } }), 16);
    t.is(toUnitless({ original: { value: 16 } }), 16);
    t.is(toUnitless({ original: { value: '16.5' } }), 16.5);
});

test('Should only transform number values', (t) => {
    t.is(toUnitless({ original: { value: 'hello' } }), 'hello');
});
