"use strict";

class Persoon {
    #voornaam;
    #familienaam;
    constructor(voornaam , familienaam){
        this.#voornaam = voornaam;
        this.#familienaam = familienaam;
    }
    getNaam(){
        return `${this.#voornaam} ${this.#familienaam}`;
    }
}

class KlassiekGezin {
    #papa;
    #mama;
    #kinderen = [];
    constructor(papa , mama){
        this.#mama = mama;
        this.#papa = papa;
    }
    getPapa(){
        return this.#papa;
    }
    getMama(){
        return this.#mama;
    }
    getKinderen(){
        return this.#kinderen;
    }
    voegKindToe(persoon){
        this.#kinderen.push(persoon);
    }
}

const gezin1 = new KlassiekGezin(new Persoon("Peter","Kuda"), new Persoon("Nathalie","Moors"));
gezin1.voegKindToe(new Persoon("Mirthe","Kuda"));
const gezin2 = new KlassiekGezin(new Persoon("Josette","Geurts"), new Persoon("Jos","Castermans"));
const  gezinnen = [];
gezinnen.push(gezin1);
gezinnen.push(gezin2);

gezinnen.forEach((gezin,index) => {
    console.log(`Gezin : ${index}` );
    console.log(`Papa  : ${gezin.getPapa().getNaam()}`);
    console.log(`Mama  : ${gezin.getMama().getNaam()}`);
    console.log("Kinderen: ");
    gezin.getKinderen().forEach(kind  => {
        console.log(`     ${kind.getNaam()}`);
    });
});