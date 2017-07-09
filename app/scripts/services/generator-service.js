'use strict';
app.factory('generatorService', function () {

    // Generates Unique ID
    function generate(){
        var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '#';
        for (var i = 13; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];

        return result;
    }

    return {
        generate: generate
    };
});