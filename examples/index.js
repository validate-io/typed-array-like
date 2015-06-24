'use strict';

var isTypedArrayLike = require( './../lib' );

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
