"use strict";
exports.__esModule = true;
var TestWebComponent = /** @class */ (function () {
    function TestWebComponent(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    TestWebComponent.prototype.searchSpaco = function (verificarEspaco) {
        var regex = /(\*|_|~|@@|%%)([^\s].*?)(?<! )\1( |$)/;
        for (var i = 0; i < verificarEspaco.length; i++) {
            console.log(verificarEspaco[i] + ' ' + i);
            if (verificarEspaco[i].indexOf('') >= 0)
                verificarEspaco.replace(/ /g, '_');
        }
        console.log(verificarEspaco.replace(/ /g, "_"));
    };
    return TestWebComponent;
}());
exports["default"] = TestWebComponent;
