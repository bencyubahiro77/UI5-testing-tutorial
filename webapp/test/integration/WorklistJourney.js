/*global QUnit*/
sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Worklist"
],  function (opaTest) {
	"use strict";

	QUnit.module("Posts");

	opaTest("Should see the table with all posts", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheWorklistPage.theTableShouldHaveAllEntries().
			and.theTitleShouldDisplayTheTotalAmountOfItems();

	});

	opaTest("should be able to load more items", function(Given, When, Then ){
		//Actions
		When.onTheWorklistPage.iPressOnMoreData();

		//Assertions
		Then.onTheWorklistPage.theTableShouldHaveAllEntries();
	})

	opaTest("should be able to search for items", function(Given, When, Then){
		//Actions
		When.onTheWorklistPage.iSearchFor("Bear");

		//Assertions
		Then.onTheWorklistPage.theTableHasOneItem();

		// CleanUp
		Then.iTeardownMyApp()
	})
});
