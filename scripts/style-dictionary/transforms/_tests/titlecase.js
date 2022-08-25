const test = require('ava');
const arrayToTitlecase = require('../titlecase');

const value = ['one', 'two', 'three'];

test('Should return all strings capitalized, delimited with a space', (t) => {
    t.is(arrayToTitlecase(value, ' '), 'One Two Three');
});

test('Should return a titlecased string with first word lowercased', (t) => {
    t.is(arrayToTitlecase(value, ' ', 1), 'one Two Three');
});

test('Should return a titlecased array when no delimiter is provided', (t) => {
    t.deepEqual(arrayToTitlecase(value), ['One', 'Two', 'Three']);
});

test('Should return a titlecased array with first index as lowercased when a start index is provided and no delimiter is provided', (t) => {
    t.deepEqual(arrayToTitlecase(value, 1), ['one', 'Two', 'Three']);
});
