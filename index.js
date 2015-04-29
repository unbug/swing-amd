define(function(require, exports, module) {
    var global = window;

    var Stack = require('stack'),
        Card = require('card');

    global.gajus = global.gajus || {};

    global.gajus.Swing = {
        Stack: Stack,
        Card: Card
    };

    return {
        Stack: Stack,
        Card: Card
    };
});