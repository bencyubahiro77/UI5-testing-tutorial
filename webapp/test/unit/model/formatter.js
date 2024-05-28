/*global QUnit*/

sap.ui.define([
	"sap/ui/demo/bulletinboard/model/formatter"
], function (formatter) {
	"use strict";

	QUnit.module("Number unit");
	QUnit.module("Price State");

	function numberUnitValueTestCase(assert, sValue, fExpectedNumber) {
		// Act
		var fNumber = formatter.numberUnit(sValue);

		// Assert
		assert.strictEqual(fNumber, fExpectedNumber, "The rounding was correct");
	}
	
	function priceStateTestCase(oOptions) {
		//Act 
		var sState = formatter.priceState(oOptions.price);
		// Assert
		oOptions.assert.strictEqual(sState, oOptions.expected, "the price was correct");
	}

	QUnit.test("Should round down a 3 digit number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "3.123", "3.12");
	});

	QUnit.test("Should round up a 3 digit number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "3.128", "3.13");
	});

	QUnit.test("Should round a negative number", function (assert) {
		numberUnitValueTestCase.call(this, assert, "-3", "-3.00");
	});

	QUnit.test("Should round an empty string", function (assert) {
		numberUnitValueTestCase.call(this, assert, "", "");
	});

	QUnit.test("Should round a zero", function (assert) {
		numberUnitValueTestCase.call(this, assert, "0", "0.00");
	});

	// price test

	QUnit.test("Should format the products with a price lower than 50 to Success", function(assert){
		priceStateTestCase.call(this,{
			assert: assert,
			price: 42,
			expected: "Success"
		})
	});

	QUnit.test("should format the product with price of 50 to normal", function(assert){
		priceStateTestCase.call(this,{
			assert:assert,
			price:50,
			expected: "None"
		})
	});

	QUnit.test("Should format the products with a price between 50 and 250 to Normal", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 112,
			expected: "None"
		});
	});

	QUnit.test("Should format the products with a price between 250 and 2000 to Warning", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 798,
			expected: "Warning"
		});
	});

	QUnit.test("Should format the products with a price higher than 2000 to Error", function (assert) {
		priceStateTestCase.call(this, {
			assert: assert,
			price: 2001,
			expected: "Error"
		});
	});
});
