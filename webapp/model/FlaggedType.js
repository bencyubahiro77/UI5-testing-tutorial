sap.ui.define([
    "sap/ui/model/SimpleType"
], function(SimpleType) {
    "use strict";
    return SimpleType.extend("sap.ui.model.bulletinboard.model.FlaggedType",{
        		/**
		 * Formats the integer value from the model to a boolean for the pressed state of the flagged button
		 *
		 * @public
		 * @param {number} iFlagged the integer value of the formatted property
		 * @returns {boolean} 1 means true, all other numbers means false
		 */
        formatValue: function(iFlagged){
           return iFlagged === 1
        },
        	/**
		 * Formats the integer value from the model to a boolean for the pressed state of the flagged button
		 *
		 * @public
		 * @param {number} iFlagged the integer value of the formatted property
		 * @returns {boolean} 1 means true, all other numbers means false
		 */
        parseValue: function(bFlagged){
            if(bFlagged){
                return 1;
            }
            return 0;
        },
        	/**
		 * Validates the value to be parsed
		 *
		 * @public
		 * Since there is only true and false, no client side validation is required
		 * @returns {boolean} true
		 */
        validateValue: function(){
          return true;
        }
    })
})