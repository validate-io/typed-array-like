'use strict';

// MODULES //

var isInteger = require( 'validate.io-integer-primitive' );


// CONSTANTS //

var MAX = require( 'const-max-uint32' );


// IS TYPED-ARRAY-LIKE //

/**
* FUNCTION: isTypedArrayLike( value )
*	Validates if a value is typed-array-like.
*
* @param {*} value - value to validate
* @param {Boolean} boolean indicating if a value is typed-array-like
*/
function isTypedArrayLike( value ) {
	return (
		value !== null &&
		typeof value === 'object' &&
		isInteger( value.length ) &&
		value.length >= 0 &&
		value.length <= MAX &&
		typeof value.BYTES_PER_ELEMENT === 'number' &&
		typeof value.byteOffset === 'number' &&
		typeof value.byteLength === 'number'
	);
} // end FUNCTION isTypedArrayLike()


// EXPORTS //

module.exports = isTypedArrayLike;
