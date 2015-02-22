define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Screen.html",
    "dojo/i18n!./nls/Footer"
],
function(declare, _WidgetBase, _TemplatedMixin, template, nls) {

    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,

        postCreate: function () {
            this.inherited(arguments);
            this.mainNode.innerHTML = nls.hello;
        }


    });



});