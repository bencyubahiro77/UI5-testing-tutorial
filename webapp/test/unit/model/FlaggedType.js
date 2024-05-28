sap.ui.require([
    "sap/ui/demo/bulletinboard/model/FlaggedType"
],
  function(FlaggedType){
    "use strict";
    QUnit.module("FlaggedType - formatting");
    QUnit.test("Should convert 1 to true", function (assert) {
        //Act
        var bFormattedValue = new FlaggedType().formatValue(1);
        // Assert
        assert.strictEqual(bFormattedValue, true, "the formatting conversion was correct")
    });
    QUnit.test("Should convert other values to false", function(assert){
        var oFlaggedType = new FlaggedType();
        //Act
        var bFormattedZero = oFlaggedType.formatValue(0);
        var bFormattedNegativeNumber = oFlaggedType.formatValue(-666);

        //assert
        assert.strictEqual(bFormattedZero, false, "the formatting conversion was correct");
        assert.strictEqual(bFormattedNegativeNumber, false, "the formatting conversion was correct");
    });
    QUnit.module("Flagged - parsing");
    QUnit.test("should parse false to 0", function(assert){
        //Act
        var iParsedValue = new FlaggedType().parseValue(false);
        //Assert
        assert.strictEqual(iParsedValue,0, "the parsing conversion matched the input");
    });
    QUnit.test("should parse true to 1", function(assert){
        //Act
        var iParsedValue = new FlaggedType().parseValue(true);
        //Assert
        assert.strictEqual(iParsedValue, 1, "the parsing conversion matched the input")
    })
  }
)