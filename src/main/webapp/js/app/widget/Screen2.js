define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/layout/AccordionContainer",
    "dijit/layout/ContentPane",
    "dojo/text!./templates/Screen.html",
    "dojo/i18n!./nls/Screen2"
],
function(declare, _WidgetBase, _TemplatedMixin, AccordionContainer, ContentPane, template, nls) {

    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,
        baseClass: 'genericWidget',


        postCreate: function () {
            this.inherited(arguments);

            var aContainer = new AccordionContainer({'class':'accordion'}, this.mainNode);
            aContainer.addChild(new ContentPane({
                title: nls.title1,
                content: nls.content1
            }));
            aContainer.addChild(new ContentPane({
                title: nls.title2,
                content: nls.content2
            }));
            aContainer.addChild(new ContentPane({
                title: nls.title3,
                href: 'data/content1.html'
            }));
            this.aContainer = aContainer;
        },

        startup: function() {
            this.aContainer.startup();
        }


    });



});