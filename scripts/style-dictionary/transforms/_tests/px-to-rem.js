const test = require('ava');
const toRem = require('../px-to-rem');

test('Should return a numeric value with rem unit', (t) => {
    t.is(toRem({ value: '16px' }), '1rem');
    t.is(toRem({ value: '16.5px' }), '1.03125rem');
});

test('Should only transform px values', (t) => {
    t.is(toRem({ value: 'normal' }), 'normal');
    t.is(toRem({ value: '16rem' }), '16rem');
});
