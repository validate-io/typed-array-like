/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isTypedArrayLike = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-typed-array-like', function tests() {

	it( 'should export a function', function test() {
		expect( isTypedArrayLike ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var values = [
			new Int8Array(),
			new Uint8Array(),
			new Int16Array(),
			new Uint16Array(),
			new Int32Array(),
			new Uint32Array(),
			new Float32Array(),
			new Float64Array(),
			new Uint8ClampedArray(),
			{
				'length': 10,
				'BYTES_PER_ELEMENT': 4,
				'byteOffset': 0,
				'byteLength': 10
			}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( isTypedArrayLike( values[i] ), values[i] );
		}
	});

	it( 'should negatively validate', function test() {
		var values = [
			'beep',
			5,
			null,
			undefined,
			NaN,
			true,
			false,
			{},
			[],
			function boop( a, b, c ) {},
			{
				'length': Math.PI,
				'BYTES_PER_ELEMENT': 4,
				'byteOffset': 0,
				'byteLength': 10
			},
			{
				'length': 10,
				'BYTES_PER_ELEMENT': true,
				'byteOffset': 0,
				'byteLength': 10
			},
			{
				'length': 10,
				'BYTES_PER_ELEMENT': 4,
				'byteOffset': [],
				'byteLength': 10
			},
			{
				'length': 10,
				'BYTES_PER_ELEMENT': 4,
				'byteOffset': 0,
				'byteLength': null
			},
			{
				'BYTES_PER_ELEMENT': 4,
				'byteOffset': 0,
				'byteLength': 10
			},
			{
				'length': 10,
				'byteOffset': 0,
				'byteLength': 10
			},
			{
				'length': 10,
				'BYTES_PER_ELEMENT': 4,
				'byteLength': 10
			},
			{
				'length': 10,
				'BYTES_PER_ELEMENT': 4,
				'byteOffset': 0
			}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( isTypedArrayLike( values[i] ), values[i] );
		}
	});

});
