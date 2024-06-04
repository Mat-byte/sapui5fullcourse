sap.ui.define([
    "sap/ui/core/mvc/Controller",    
    "sap/m/MessageToast"],
    (Controller, MessageToast) => {
        'use strict';
        return Controller.extend("ui5.walkthrough.controller.HelloPanel", {
            onShowHello() {
                //Read model msg
                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                let sRecipient = this.getView().getModel().getProperty("/recipient/name");
                let sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            },
            async onOpenDialog() {
                //Create dialog lazily
                this.oDialog ??= await this.loadFragment({
                    name: "ui5.walkthrough.view.HelloDialog"
                });
            
                this.oDialog.open();
            },

            onCloseDialog(){
                this.byId("helloDialog").close();
            }
        });
    });