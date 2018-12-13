# json-cookie
json-cookie is client module for easy cookie handling, support JSON data format without manual parsing and serializing.

## Installation
Super quick install with npm. (Thanks npm!)
> $ npm install --save json-cookie

## Usage
If you are using web bundler like Browserify or Webpack, you can easily import them:

```javascript
import cookie from 'json-cookie';
// or
var cookie = require('json-cookie');
```

Else, you should load manually with proper web server settings.
```html
<script src="/node_modules/json-cookie/index.js"></script>
```

Or just copy /node_modules/json-cookie/index.js into your project directory and include it.
I'm heavily recommend that using bundler. If you are not familiar with, you should try it. It isn't hard!


### void cookie.set(string key, var value[, object options])
Set cookie with specified key and value with options. value can be a object.
Available options are:
 - expires: Days of expiration.
 - days: Alias of expires.
 - path: Path of cookie.
 - domain: Domain of cookie.
 - secure: HTTPS only.
 
```javascript
import cookie from 'json-cookie';

cookie.set('test', 'test');		// test=test
cookie.set('json-test', { name: '.modernator' });    // json-test={"name":".modernator"}

cookie.set('ex-test', 'test', {
	expires: 1
});		// ex-test=test; expires= ...
```


### void cookie.get(string key)
Get cookie with key. If cookie isn't exist, it returns undefined.

```javascript
import cookie from 'json-cookie';

cookie.get('test');		// test
cookie.get('json-test');	// Object { name: '.modernator' }

```


### void cookie.delete(string key)
Delete cookie with key.

```javascript
import cookie from 'json-cookie';

cookie.delete('test');
cookie.get('test');		//
```


## Cautions
- This module is client side only, not support on node.js.
