define([
    "dojo/_base/declare",
    "dojo/hash",
    "dojo/topic",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/layout/LayoutContainer",
    "dijit/layout/ContentPane",
    "./widget/NavigationWidget",
    "dojo/text!./templates/HomePage.html",
    "app/widget/Screen1",
    "app/widget/Screen2",
    "app/widget/Screen3",
    "app/widget/Footer"
],
function (declare, hash, topic, _WidgetBase, _TemplatedMixin, LayoutContainer, ContentPane, NavigationWidget, template, Screen1, Screen2, Screen3, Footer) {

    var prefix = "!";
    var defaultScreen = "screen1";


    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,
        centerContentPane: null,


        postCreate: function() {
            this.inherited(arguments);
            var that = this;

            this.layoutContainer = new LayoutContainer({design:'headline', 'class': 'layoutWidget'}, this.mainNode);

            topic.subscribe("/dojo/hashchange", function(newHash){
                that.changeScreens(newHash.substr(prefix.length));
            });
        },


        startup: function() {
            var navigationWidget = new NavigationWidget({});
            this.navContentPane = new ContentPane({
                region: "top",
                content: navigationWidget
            });

            var screen = new Screen1({});
            this.centerContentPane = new ContentPane({
                region: "center",
                content: screen
            });

            var footerContent =  new Footer({});
            this.footerContentPane = new ContentPane({
                region: "bottom",
                content: footerContent
            });

            this.layoutContainer.addChild(this.navContentPane);
            this.layoutContainer.addChild(this.centerContentPane);
            this.layoutContainer.addChild(this.footerContentPane);
            this.layoutContainer.startup();
            navigationWidget.startup();
            footerContent.startup();
            screen.startup();

            hash(location.hash || (prefix + defaultScreen), true); // chrome as issues with this.

            screen.layoutContainer.resize();  // due to ordering of dijit inits, you may need to call resize() to get things to render correctly.
        },


        changeScreens: function(changeTo) {
            var that = this;
            hash(prefix + changeTo);

            var setContent = function(content) {
                that.centerContentPane.set('content', content);
                content.startup();
            };

            that.centerContentPane.content.destroyRecursive();
            if(changeTo == "screen1") setContent(new Screen1({}));
            if(changeTo == "screen2") setContent(new Screen2({}));
            if(changeTo == "screen3") setContent(new Screen3({}));
        }

});

});