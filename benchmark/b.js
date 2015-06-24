'use strict';

// MODULES //

var isTypedArrayLike = require( './../lib' );


// VARIABLES //

var start,
	stop,
	arr,
	len,
	res,
	b,
	i;

arr = {};
arr.BYTES_PER_ELEMENT = 4;
arr.length = 10;
arr.byteOffset = 0;
arr.byteLength = 10;


// FUNCTIONS //

var toStr = Object.prototype.toString;


// --------------------------------------
// WARM-UP

len = 1e6;
for ( i = 0; i < len; i++ ) {
	i = i;
}


// --------------------------------------
// BENCHMARK

len = 1e6;
res = new Array( 2 );

// Control:
start = process.hrtime();
for ( i = 0; i < len; i++ ) {
	b = ( toStr.call( arr ) === '[object Object]' );
}
stop = process.hrtime( start );

res[ 0 ] = stop[ 0 ] + stop[ 1 ]*1e-9;

// Test:
start = process.hrtime();
for ( i = 0; i < len; i++ ) {
	b = isTypedArrayLike( arr );
}
stop = process.hrtime( start );

res[ 1 ] = stop[ 0 ] + stop[ 1 ]*1e-9;


// --------------------------------------
// RESULTS

console.log( 'ctrl:\t%d ops/sec', Math.floor( len/res[ 0 ] ) );
console.log( 'test:\t%d ops/sec', Math.floor( len/res[ 1 ] ) );
console.log( '\n' );

