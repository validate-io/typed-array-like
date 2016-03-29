typed-array-like
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is [typed-array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)-like.


## Installation

``` bash
$ npm install validate.io-typed-array-like
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var isTypedArrayLike = require( 'validate.io-typed-array-like' );
```

#### isTypedArrayLike( value )

Validates if a value is [`typed-array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)-like.

``` javascript
var bool;

bool = isTypedArrayLike( new Int16Array() );
// returns true

bool = isTypedArrayLike({
	'length': 10,
	'byteOffset': 0,
	'byteLength': 10,
	'BYTES_PER_ELEMENT': 4
});
// returns true
```


## Examples

``` javascript
var isTypedArrayLike = require( 'validate.io-typed-array-like' );

var arr = {
	'BYTES_PER_ELEMENT': 8,
	'length': 10,
	'byteOffset': 0,
	'byteLength': 10
};
console.log( isTypedArrayLike( arr ) );
// returns true

console.log( isTypedArrayLike( new Int8Array( 4 ) ) );
// returns true

console.log( isTypedArrayLike( [] ) );
// returns false

console.log( isTypedArrayLike( {} ) );
// returns false

console.log( isTypedArrayLike( null ) );
// returns false

console.log( isTypedArrayLike( 'beep' ) );
// returns false

console.log( isTypedArrayLike( function foo( a, b ) {} ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015-2016. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-typed-array-like.svg
[npm-url]: https://npmjs.org/package/validate.io-typed-array-like

[travis-image]: http://img.shields.io/travis/validate-io/typed-array-like/master.svg
[travis-url]: https://travis-ci.org/validate-io/typed-array-like

[coveralls-image]: https://img.shields.io/coveralls/validate-io/typed-array-like/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/typed-array-like?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/typed-array-like.svg
[dependencies-url]: https://david-dm.org/validate-io/typed-array-like

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/typed-array-like.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/typed-array-like

[github-issues-image]: http://img.shields.io/github/issues/validate-io/typed-array-like.svg
[github-issues-url]: https://github.com/validate-io/typed-array-like/issues
