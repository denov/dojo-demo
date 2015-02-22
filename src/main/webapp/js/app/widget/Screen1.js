define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/layout/LayoutContainer",
    "dijit/layout/ContentPane",
    "dojox/layout/GridContainer",
    "dojox/widget/Portlet",
    "dijit/form/DropDownButton",
    "dijit/TooltipDialog",
    "dojo/dom-construct",
    "dojo/text!./templates/Screen.html",
    "dojo/i18n!./nls/Screen1"
],
function(declare, _WidgetBase, _TemplatedMixin, LayoutContainer, ContentPane, GridContainer, Portlet, DropDownButton, TooltipDialog, domConstruct, template, nls) {

    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,
        baseClass: 'genericWidget',

        postCreate: function () {
            this.inherited(arguments);

            this.layoutContainer = new LayoutContainer({
                baseClass: 'layoutWidget',
                design:'sidebar'
            }, this.mainNode);

            var leftContentPane = new ContentPane({
                baseClass: 'leftWidget',
                region: "left",
                content: "left"
            });
            this.layoutContainer.addChild(leftContentPane);

            var rightContentPane = new ContentPane({
                baseClass: 'rightWidget',
                region: "right",
                content: "right"
            });
            this.layoutContainer.addChild(rightContentPane);


            this.gridContainer = new GridContainer({
                baseClass: 'gridWidget',
                nbZones: 3,
                opacity: .5,
                region: "center",
                hasResizableColumns: false,
                allowAutoScroll: false,
                withHandles: true,
                dragHandleClass: 'dijitTitlePaneTitle',
                acceptTypes: ['Portlet'],
                isOffset: true
            });
            this.layoutContainer.addChild(this.gridContainer);

            var portletContent1 = [
                domConstruct.create('div', {innerHTML: nls.portlet1Content})
            ];
            var portlet1 = Portlet({
                id: 'portlet1',
                closable: false,
                dndType: 'Portlet',
                title: nls.portlet1Title,
                content: portletContent1
            });
            // create a new TooltipDialog:
            var tooltipDialog = new TooltipDialog({
                content: nls.toolTip,
                style: {width:'320px'}
            });
            // create a new DropDownButton and assign the TooltipDialog:
            var testButton = new DropDownButton({
                label: nls.buttonLabel,
                dropDown: tooltipDialog
            });

            portlet1.addChild(testButton);
            this.gridContainer.addChild(portlet1);

            var portlet2 = Portlet({
                id: 'portlet2',
                closable: false,
                dndType: 'Portlet',
                title: nls.portlet2Title,
                content: nls.portlet2Content
            });

            this.gridContainer.addChild(portlet2);


        },

        startup: function() {
            this.layoutContainer.startup();
            //this.gridContainer.startup();
        }


    });



});