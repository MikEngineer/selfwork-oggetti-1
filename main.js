// Crea un oggetto persona con le seguenti caratteristiche:
// nome
// cognome
// eta'
// un metodo che permetta di salutare

let persona = {
    nome : "Michelangelo",
    cognome : "Ruisi",
    età : 28,
    saluto : function(){
        console.log(`Ciao a tutti, mi chiamo ${this.nome}!`);
    }
};

persona.saluto();