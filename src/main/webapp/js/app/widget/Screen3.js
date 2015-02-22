define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/Dialog",
    "dijit/form/Button",
    "dojo/_base/lang",
    "dojo/text!./templates/Screen3.html",
    "dojo/i18n!./nls/Screen3"
],
function(declare, _WidgetBase, _TemplatedMixin, Dialog, Button, lang, template, nls) {

    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,
        baseClass: 'genericWidget',
        dialogBox: null,

        postCreate: function(){
            this.inherited(arguments);
            var that = this;
            this.hello.innerHTML = nls.hello;

            new Button({
                label: 'Show me!',
                onClick: lang.hitch(that, that.showDialogTwo)
            }, this.btnNode);

            this.dialogBox = new Dialog({
                title: "Programmatic Dialog Creation",
                style: "width: 300px"
            });
        },


        showDialogTwo: function(){
            console.info("show");
            this.dialogBox.set("content", "Hey, I wasn't there before, I was added at " + new Date() + "!");
            this.dialogBox.set("href", 'data/content1.html');
            this.dialogBox.show();
        }


    });



});