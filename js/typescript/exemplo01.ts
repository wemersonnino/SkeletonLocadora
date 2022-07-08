import './testWebComponent';
import TestWebComponent from "./testWebComponent";

const donuts: string[] = [
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

const t = new TestWebComponent('Wemerson','Lareira','123');
t.searchSpaco("Wemerson Moreira Pereira");

for (let i = 0; i < donuts.length; i++) {
    
}

let list = document.getElementById("testList");
const urlText:string = ".com";

const fList = (url:string) => {
    donuts.map((item,index) =>{
        let p = document.createElement("li");
        let a = document.createElement("a");
        a.innerText = item;
        a.setAttribute('href',item.replace(/ /g,'_') + url);
        a.setAttribute('title',item);
        a.setAttribute('id',String(index));
        p.appendChild(a);
        list.appendChild(p);
    });
}
fList(urlText);



