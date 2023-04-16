"use strict";

class Vierkant {
    #zijde;
    constructor(zijde){
        this.#zijde=zijde
    }
    getOmtrek(){
        return this.#zijde*this.#zijde*4;
    }
    getOppervlakte(){
        return this.#zijde*this.#zijde;
    }
}

const vierkanten = [
    new Vierkant(2),
    new Vierkant(3),
    new Vierkant(4),
    new Vierkant(5),
    new Vierkant(10),
];
let totaleOmtrek = 0;
let totaleOppervlakte = 0;
for (const vierkant of vierkanten) {
    console.log(`Omtrek ${vierkant.getOmtrek()}`);
    console.log(`Oppervlakte ${vierkant.getOppervlakte()}`);
    totaleOmtrek+=vierkant.getOmtrek();
    totaleOppervlakte+=vierkant.getOppervlakte();
}
console.log(`Totale omtrek ${totaleOmtrek}`);
console.log(`Totale oppervlakte ${totaleOppervlakte}`);