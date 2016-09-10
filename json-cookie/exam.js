import cookie from './json-cookie';

// notice that this example not worked properly on localhost.
// try to make simple http server with express or something else.

console.log(cookie.get('test'));
cookie.set('test', 'test', {
	expires: 1
});
console.log(cookie.get('test'));

cookie.delete('test');

console.log(cookie.get('test'));

// json test
console.log(cookie.get('json-test'));
cookie.set('json-test', {
	'hello': 'world!'
}, {
	expires: 1
});

console.log(cookie.get('json-test'));