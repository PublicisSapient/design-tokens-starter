const test = require('ava');
const quoteURL = require('../quote-url');

test('Should return a quoted URL', (t) => {
    t.is(quoteURL({ value: 'http://example.com' }), "'http://example.com'");
    t.is(quoteURL({ value: 'https://example.com' }), "'https://example.com'");
});

test('Should only transform URLs', (t) => {
    t.is(quoteURL({ value: 'Hello' }), 'Hello');
});
