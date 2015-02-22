define([
    '../../dojo/_base/declare',
    'dijit/Dialog' ],
function (declare, Dialog) {

    return declare(Dialog, {
        title: 'Hello World',
        content: 'Loaded successfully!'
    });

});