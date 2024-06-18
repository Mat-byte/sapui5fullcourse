//@ui5-bundle ui5/walkthrough/Component-preload.js
sap.ui.require.preload({
	"ui5/walkthrough/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,t,i){"use strict";return e.extend("ui5.walkthrough.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init:function(){e.prototype.init.apply(this,arguments);let n={recipient:{name:"UI5"}};let o=new t(n);this.setModel(o);const s=new t(i);s.setDefaultBindingMode("OneWay");this.setModel(s,"device");this.getRouter().initialize()}})});
},
	"ui5/walkthrough/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("ui5.walkthrough.controller.App",{})});
},
	"ui5/walkthrough/controller/Detail.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History"],(e,t)=>{"use strict";return e.extend("ui5.walkthrough.controller.Detail",{onInit(){const e=this.getOwnerComponent().getRouter();e.getRoute("detail").attachPatternMatched(this.onObjectMatched,this)},onObjectMatched(e){this.getView().bindElement({path:"/"+window.decodeURIComponent(e.getParameter("arguments").invoicePath),model:"invoice"})},onNavBack(){const e=t.getInstance();const o=e.getPreviousHash();if(o!==undefined){window.history.go(-1)}else{const e=this.getOwnerComponent().getRouter();e.navTo("overview",{},true)}}})});
},
	"ui5/walkthrough/controller/HelloPanel.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],(e,o)=>{"use strict";return e.extend("ui5.walkthrough.controller.HelloPanel",{onShowHello(){let e=this.getView().getModel("i18n").getResourceBundle();let l=this.getView().getModel().getProperty("/recipient/name");let t=e.getText("helloMsg",[l]);o.show(t)},async onOpenDialog(){this.oDialog??=await this.loadFragment({name:"ui5.walkthrough.view.HelloDialog"});this.oDialog.open()},onCloseDialog(){this.byId("helloDialog").close()}})});
},
	"ui5/walkthrough/controller/InvoiceList.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","../model/formatter","sap/ui/model/Filter","sap/ui/model/FilterOperator"],(e,t,o,n,i)=>{"use strict";return e.extend("ui5.walkthrough.controller.InvoiceList",{formatter:o,onInit(){const e=new t({currency:"EUR"});this.getView().setModel(e,"view")},onFilterInvoices(e){const t=[];const o=e.getParameter("query");if(o){t.push(new n("ProductName",i.Contains,o))}const r=this.byId("invoiceList");const s=r.getBinding("items");s.filter(t)},onPress(e){const t=e.getSource();const o=this.getOwnerComponent().getRouter();o.navTo("detail",{invoicePath:window.encodeURIComponent(t.getBindingContext("invoice").getPath().substr(1))})}})});
},
	"ui5/walkthrough/i18n/i18n.properties":'# App descriptor\r\nappTitle = Hello SAPUI5 App\r\nappDescription = My first app\r\n# Hello panel\r\nshowHelloButtonText=Say Hello\r\nhelloMsg=Hello {0}\r\nhomePageTitle=Walkthrough\r\nhelloPanelTitle=Hello World\r\nopenDialogButtonText=Say Hello with Dialog\r\ndialogCloseButtonText=Ok\r\n# Invoice List\r\ninvoiceListTitle=Invoices\r\ninvoiceStatusA=New\r\ninvoiceStatusB=In Progress\r\ninvoiceStatusC=Done\r\ncolumnQuantity=Quantity\r\ncolumnName=Name\r\ncolumnSupplier=Supplier\r\ncolumnStatus=Status\r\ncolumnPrice=Price\r\n#Detail Page\r\ndetailPageTitle=Walkthrough - Details\r\n',
	"ui5/walkthrough/manifest.json":'{"_version":"1.58.0","sap.app":{"id":"ui5.walkthrough","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","dataSources":{"invoiceRemote":{"uri":"V2/Northwind/Northwind.svc/","type":"OData","settings":{"odataVersion":"2.0"}}}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"dependencies":{"minUI5Version":"1.108.0","libs":{"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"cozy":true,"compact":false},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ui5.walkthrough.i18n.i18n","supportedLocales":[""],"fallbackLocale":""}},"invoice":{"dataSource":"invoiceRemote"}},"rootView":{"viewName":"ui5.walkthrough.view.App","type":"XML","async":true,"id":"app"},"routing":{"config":{"routerClass":"sap.m.routing.Router","type":"View","viewType":"XML","path":"ui5.walkthrough.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"overview","target":"overview"},{"pattern":"detail/{invoicePath}","name":"detail","target":"detail"}],"targets":{"overview":{"id":"overview","name":"Overview"},"detail":{"id":"detail","name":"Detail"}}}}}',
	"ui5/walkthrough/model/formatter.js":function(){
sap.ui.define([],()=>{"use strict";return{statusText(e){const t=this.getOwnerComponent().getModel("i18n").getResourceBundle();switch(e){case"A":return t.getText("invoiceStatusA");case"B":return t.getText("invoiceStatusB");case"C":return t.getText("invoiceStatusC");default:return e}}}});
},
	"ui5/walkthrough/view/App.view.xml":'<mvc:View\r\n    controllerName="ui5.walkthrough.controller.App"\r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"\r\n    displayBlock="true"><Shell><App id="app"/></Shell></mvc:View>\r\n',
	"ui5/walkthrough/view/Detail.view.xml":'<mvc:View\r\n    controllerName="ui5.walkthrough.controller.Detail"\r\n\txmlns="sap.m"\r\n\txmlns:mvc="sap.ui.core.mvc"><Page\r\n\t\ttitle="{i18n>detailPageTitle}"\r\n        showNavButton="true"\r\n\t\tnavButtonPress=".onNavBack"><ObjectHeader \r\n\t\t\tresponsive="true"\r\n\t\t\tfullScreenOptimized="true"\r\n            intro="{invoice>ShipperName}"\r\n            title="{invoice>ProductName}"/></Page></mvc:View>',
	"ui5/walkthrough/view/HelloDialog.fragment.xml":'<core:FragmentDefinition\r\n   xmlns="sap.m"\r\n   xmlns:core="sap.ui.core"><Dialog\r\n      id="helloDialog"\r\n      title="Hello {/recipient/name}"><content><core:Icon \r\n            src="sap-icon://hello-world"\r\n            size="8rem"\r\n            class="sapUiMediumMargin"/></content><beginButton><Button \r\n        text="{i18n>dialogCloseButtonText}"\r\n        press=".onCloseDialog"/></beginButton></Dialog></core:FragmentDefinition>',
	"ui5/walkthrough/view/HelloPanel.view.xml":'<mvc:View\r\n    controllerName="ui5.walkthrough.controller.HelloPanel"\r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"><Panel\r\n        headerText="{i18n>helloPanelTitle}"\r\n        class="sapUiResponsiveMargin"\r\n        width="auto"\r\n        expandable="{device>/system/phone}"\r\n        expanded="{= !${device>/system/phone} }"><content><Button\r\n                id="helloDialogButton"\r\n                text="{i18n>openDialogButtonText}"\r\n                icon="sap-icon://world"\r\n                press=".onOpenDialog"                \r\n                class="sapUiSmallMarginEnd sapUiVisibleOnlyOnDesktop"/><Button\r\n                text="{i18n>showHelloButtonText}"\r\n                press=".onShowHello"\r\n                class="sapUiSmallMarginEnd"/><Input\r\n                value="{/recipient/name}"\r\n                description="Hello {/recipient/name}"\r\n                valueLiveUpdate="true"\r\n                width="60%"/><Text\r\n                text="Hello {/recipient/name}"\r\n                class="sapUiSmallMargin"/></content></Panel></mvc:View>\r\n',
	"ui5/walkthrough/view/InvoiceList.view.xml":'<mvc:View\r\n    controllerName="ui5.walkthrough.controller.InvoiceList"\r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"\r\n><Table\r\n        id="invoiceList"\r\n        class="sapUiResponsiveMargin"\r\n        width="auto"\r\n        items="{\r\n            path: \'invoice>/Invoices\',\r\n            sorter: {\r\n                path : \'ShipperName\',\r\n                group: true\r\n            }}"\r\n    ><headerToolbar><Toolbar><Title text="{i18n>invoiceListTitle}" /><ToolbarSpacer /><SearchField\r\n                    width="50%"\r\n                    search=".onFilterInvoices"\r\n                /></Toolbar></headerToolbar><columns><Column\r\n                hAlign="End"\r\n                minScreenWidth="Small"\r\n                demandPopin="true"\r\n                width="5em"\r\n            ><Text text="{i18n>columnQuantity}" /></Column><Column><Text text="{i18n>columnName}" /></Column><Column\r\n                minScreenWidth="Small"\r\n                demandPopin="true"\r\n            ><Text text="{i18n>columnStatus}" /></Column><Column\r\n                minScreenWidth="Tablet"\r\n                demandPopin="false"\r\n            ><Text text="{i18n>columnSupplier}" /></Column><Column hAlign="End"><Text text="{i18n>columnPrice}" /></Column></columns><items><ColumnListItem\r\n                type="Navigation"\r\n                press=".onPress"\r\n            ><cells><ObjectNumber\r\n                        number="{invoice>Quantity}"\r\n                        emphasized="false"\r\n                    /><ObjectIdentifier title="{invoice>ProductName}" /><Text\r\n                        text="{\r\n\t\t\t\t\t\t\t\tparts: [\r\n\t\t\t\t\t\t\t\t\t\'invoice>Status\',\r\n\t\t\t\t\t\t\t\t\t\'i18n>invoiceStatusA\',\r\n\t\t\t\t\t\t\t\t\t\'i18n>invoiceStatusB\',\r\n\t\t\t\t\t\t\t\t\t\'i18n>invoiceStatusC\'\r\n\t\t\t\t\t\t\t\t],\r\n\t\t\t\t\t\t\t\tformatter: \'.formatter.statusText\'\r\n\t\t\t\t\t\t\t}"\r\n                    /><Text text="{invoice>ShipperName}" /><ObjectNumber\r\n                        number="{\r\n\t\t\t\t\t\t\t\tparts: [\r\n\t\t\t\t\t\t\t\t\t\'invoice>ExtendedPrice\',\r\n\t\t\t\t\t\t\t\t\t\'view>/currency\'\r\n\t\t\t\t\t\t\t\t],\r\n\t\t\t\t\t\t\t\ttype: \'sap.ui.model.type.Currency\',\r\n\t\t\t\t\t\t\t\tformatOptions: {\r\n\t\t\t\t\t\t\t\t\tshowMeasure: false\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}"\r\n                        unit="{view>/currency}"\r\n                        state="{= ${invoice>ExtendedPrice} > 50 ? \'Error\' : \'Success\' }"\r\n                    /></cells></ColumnListItem></items></Table></mvc:View>\r\n',
	"ui5/walkthrough/view/Overview.view.xml":'<mvc:View\r\n    controllerName="ui5.walkthrough.controller.App"\r\n    xmlns="sap.m"\r\n    xmlns:mvc="sap.ui.core.mvc"\r\n    displayBlock="true"><Page title="{i18n>homePageTitle}"><content><mvc:XMLView viewName="ui5.walkthrough.view.HelloPanel" /><mvc:XMLView viewName="ui5.walkthrough.view.InvoiceList" /></content></Page></mvc:View>\r\n'
});
//# sourceMappingURL=Component-preload.js.map