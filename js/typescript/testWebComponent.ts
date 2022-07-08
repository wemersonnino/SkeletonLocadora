class TestWebComponent {
    private title: string;
    private pages:string;
    private isbn:string;
    constructor(title:string,pages:string,isbn:string) {
        this.title = title;
        this.pages = pages;
        this.isbn  = isbn;
    }

    searchSpaco(verificarEspaco:string){
        var regex = /(\*|_|~|@@|%%)([^\s].*?)(?<! )\1( |$)/;
        for(let i = 0; i < verificarEspaco.length; i++){
            console.log(verificarEspaco[i] + ' ' + i);
            if (verificarEspaco[i].indexOf('') >= 0)
                verificarEspaco.replace(/ /g,'_');
        }

        console.log(verificarEspaco.replace(/ /g, "_"));
    }
}

export default TestWebComponent;
