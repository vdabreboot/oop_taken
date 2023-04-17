"use strict";

class Tegel {
     #prijs
     constructor(prijs){
        this.#prijs = prijs;
     }
     getPrijs(){
        return this.#prijs;
     }
}

class VierkanteTegel extends Tegel {
    #zijde
    constructor(prijs,zijde){
        super(prijs);
        this.#zijde = zijde;
    }
    getOppervlakte(){
        return Number((this.#zijde * this.#zijde)).toFixed(2);
    }
}

class RechthoekigeTegel extends Tegel {
    #lengte
    #breedte
    constructor(prijs, lengte, breedte){
        super(prijs);
        this.#lengte = lengte;
        this.#breedte = breedte;
    }
    getOppervlakte(){
        return Number((this.#lengte * this.#breedte)).toFixed(2);
    }
}

class RondeTegel extends Tegel {
    #straal;
    constructor(prijs, straal){
        super(prijs);
        this.#straal = straal;
    }
    getOppervlakte(){
        return Number((this.#straal*this.#straal * Math.PI)).toFixed(2);
    }
}

class BestelRegel {
    #aantal;   
    #tegel;    
    constructor(tegel,aantal){
        this.#tegel = tegel;
        this.#aantal = aantal;
    }
    getOppervlakte(){        
        return Number((this.#aantal * this.#tegel.getOppervlakte()).toFixed(2));        
    }
    getTeBetalen(){        
        return this.#aantal * this.#tegel.getPrijs();
    }
}

class Bestelling {
    #bestelRegels = [];
    voegBestelRegelToe(bestelRegel){
        this.#bestelRegels.push(bestelRegel);
    }
    getOppervlakte(){       
        return this.#bestelRegels.map( oppervlakte => oppervlakte.getOppervlakte()).reduce ( (som, getal) => som + getal);
    }
    getTeBetalen(){        
        return this.#bestelRegels.map( prijs => prijs.getTeBetalen()).reduce ( (som, getal) => som + getal);        
    }
}

const bestelling = new Bestelling();
bestelling.voegBestelRegelToe(new BestelRegel(new VierkanteTegel(4, 3), 10));
bestelling.voegBestelRegelToe(new BestelRegel(new RechthoekigeTegel(4,5,3),10));
bestelling.voegBestelRegelToe(new BestelRegel(new RondeTegel(4, 3), 10));
console.log(bestelling.getOppervlakte(), bestelling.getTeBetalen());