"use strict";

class Voertuig {
    #maximumAantalPersonen;
    constructor(maximumAantalPersonen){
        this.#maximumAantalPersonen = maximumAantalPersonen;
    }
    getInfo(){
        return `Maximum aantal personen : ${this.#maximumAantalPersonen}`;
    }
}

class LandVoertuig  extends Voertuig {
    #aantalWielen;
    constructor(maximumAantalPersonen,aantalWielen){
        super(maximumAantalPersonen);
        this.#aantalWielen = aantalWielen;
    }
    getInfo(){
        return `${super.getInfo()} \nAantal wielen : ${this.#aantalWielen}`;
    }
}

class Vaartuig extends Voertuig {
    #diepgang;
    constructor(maximumAantalPersonen,diepgang){
        super(maximumAantalPersonen);
        this.#diepgang = diepgang;
    }
    getInfo(){
        return `${super.getInfo()} \nDiepgang : ${this.#diepgang}`;
    }    
}

class Fiets extends LandVoertuig {
    #aantalVersnellingen;
    constructor(maximumAantalPersonen,aantalWielen,aantalVersnellingen){
        super(maximumAantalPersonen,aantalWielen);
        this.#aantalVersnellingen = aantalVersnellingen;
    }    
    getInfo(){
        return `${super.getInfo()} \nAantal versnellingen : ${this.#aantalVersnellingen}`;
    }    
}

class Duikboot extends Vaartuig {
    #maximumDuikDiepte;
    constructor(maximumAantalPersonen, diepgang, maximumDuikdiepte){
        super(maximumAantalPersonen,diepgang);
        this.#maximumDuikDiepte = maximumDuikdiepte;
    }
    getInfo(){
        return `${super.getInfo()} \nMaxiumum duikdiepte : ${this.#maximumDuikDiepte}`;
    }    
}


const fiets = new Fiets(1,2,21);
const duikboot = new Duikboot(2,2,50);

console.log(fiets.getInfo());
console.log(duikboot.getInfo());