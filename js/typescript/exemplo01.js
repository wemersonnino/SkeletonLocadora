"use strict";
exports.__esModule = true;
require("./testWebComponent");
var testWebComponent_1 = require("./testWebComponent");
var donuts = [
    "Gelatina",
    "Trancoso",
    "Chocolate",
    "Maria mole",
    "Bala",
    "Chiclete",
    "Creme De Leite",
    "Mel",
    "Leite Ninho",
    "Caramelo",
    "Milho verde",
    "Flocos",
    "Wemerson Nino Pereira"
];
var t = new testWebComponent_1["default"]('Wemerson', 'Lareira', '123');
t.searchSpaco("Wemerson Moreira Pereira");
for (var i = 0; i < donuts.length; i++) {
}
var list = document.getElementById("testList");
var urlText = ".com";
var fList = function (url) {
    donuts.map(function (item, index) {
        var p = document.createElement("li");
        var a = document.createElement("a");
        a.innerText = item;
        a.setAttribute('href', item.replace(/ /g, '_') + url);
        a.setAttribute('title', item);
        a.setAttribute('id', String(index));
        p.appendChild(a);
        if (list != null) {
            list.appendChild(p);
        }
    });
};
fList(urlText);
t.docmentArvore("mudando title");
