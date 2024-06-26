sap.ui.define([
	'sap/ui/test/Opa5',
	'sap/ui/test/matchers/Properties',
	'sap/ui/test/actions/Press'
], function (Opa5, Properties, Press) {
    "use strict";
    var sViewName = "Post";
    Opa5.createPageObjects({
        onThePostPage:{
            actions:{
                iPressTheBackButton: function(){
                    return this.waitFor({
                        id:"page",
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Did not find the nav button on the object page"
                    });
                },
                iPressOnTheTabWithTheKey: function(){
                    return this.waitFor({
                        controlType: sViewName,
                        viewName: sViewName,
                        matchers: new Properties({
                            key: sKey
                        }),
                        actions: new Press(),
                        errorMessage: "Cannot find the icon tab car"
                    })
                }
            },
            assertions:{
                theTitleShouldDisplayTheName: function(sName){
                    return this.waitFor({
                        success:function(){
                            return this.waitFor({
                                id:"objectHeader",
                                viewName: sViewName,
                                matchers: new Properties({
                                    title: sName
                                }),
                                success: function(oPage){
                                    Opa5.assert.ok(true, "was on the remembered detail page");
                                },
                                errorMessage: "The Post " + sName + "is not shown"
                            })
                        }
         
                    });
                },

                iShouldSeeTheViewCounter: function(){
                    return this.waitFor({
                        id: "viewCounter",
                        viewName: sViewName,
                        success: function(){
                            Opa5.assert.ok(true, "the view counter was visible");
                        },
                        errorMessage: "The view counter could not be found"
                    })
                }
            }
        }
    })
})