sap.ui.define([
	"sap/ui/demo/bulletinboard/model/DateFormatter",
    "sap/ui/core/Locale",
	"sap/ui/core/date/UI5Date"
], function(DateFormatter, Locale, UI5Date) {
    var oFormatter = null;
    QUnit.module("DateFormatter",{
        beforeEach: function (){
            oFormatter = new DateFormatter({
                now: function(){
                    return UI5Date.getInstance(2015, 2, 14, 14, 0, 0, 0).getTime();
                  },
                locale: new Locale("en-US"),
            })
        }
    });
    QUnit.test("should return 'Yesterday' if date from yesterday", function(assert){
        var oDate = UI5Date.getInstance(2015, 2, 13);
        var sFormattedDate = oFormatter.format(oDate);
        assert.strictEqual(sFormattedDate, "Yesterday");

    })

    QUnit.test("should return day of the week if date < 7 days ago", function(assert){
        var oDate = UI5Date.getInstance(2015, 2, 8);
        var sFormattedDate = oFormatter.format(oDate);
        assert.strictEqual(sFormattedDate, "Sun");
    })

    QUnit.test("should return date w/o time if date > 7 days ago", function(assert){
        var oDate = UI5Date.getInstance(2015, 2, 7);
		var sFormattedDate = oFormatter.format(oDate);
		assert.strictEqual(sFormattedDate, "Mar 7, 2015");
    })
})