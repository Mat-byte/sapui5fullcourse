sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
    'use strict';
    return UIComponent.extend("ui5.walkthrough.Component", {
        metadata: {
            manifest: "json",
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            //This parameters already in manifest.json
            /*rootView: {
                "viewName": "ui5.walkthrough.view.App",
                "type": "XML",
                "id": "app"
            }*/
        },
        init: function () {
            // Call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            //Set data models
            let oData = {
                recipient: {
                    name: "UI5"
                }
            };
            let oModel = new JSONModel(oData);
            this.setModel(oModel);

            //Set i18n model: Already in manifest.json
            /*const i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");*/
        }

    })
});