sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],(e,o)=>{"use strict";return e.extend("ui5.walkthrough.controller.HelloPanel",{onShowHello(){let e=this.getView().getModel("i18n").getResourceBundle();let l=this.getView().getModel().getProperty("/recipient/name");let t=e.getText("helloMsg",[l]);o.show(t)},async onOpenDialog(){this.oDialog??=await this.loadFragment({name:"ui5.walkthrough.view.HelloDialog"});this.oDialog.open()},onCloseDialog(){this.byId("helloDialog").close()}})});
//# sourceMappingURL=HelloPanel.controller.js.map