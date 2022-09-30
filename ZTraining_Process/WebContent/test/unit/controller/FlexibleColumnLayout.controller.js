/*global QUnit*/

sap.ui.define([
	"zhr_training/zhr_training/controller/FlexibleColumnLayout.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FlexibleColumnLayout Controller");

	QUnit.test("I should test the FlexibleColumnLayout controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
