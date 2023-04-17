"use strict";

class Persoon {
    #voornaam;
    #familienaam;
    constructor(voornaam , familienaam){
        this.#voornaam = voornaam;
        this.#familienaam = familienaam;
    }
    getNaam(){
        return `${this.voornaam} ${this.familienaam}`;
    }
}

class KlassiekGezin {
    #papa;
    #mama;
    #kinderen = [];
    constructor(mama , papa){
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
}