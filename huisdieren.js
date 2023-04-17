"use strict";

class Huisdier {
    #naam;
    constructor(naam){
        this.#naam = naam;
    }
    getNaam(){
        return this.#naam;
    }
}

class Hond extends Huisdier{
    getGeluid(){
        return "waf waf";
    }
}

class Kat extends Huisdier {
    getGeluid(){
        return "miauw";
    }
}

const dieren = [
    new Hond("Darco"),
    new Kat("sheba"),
    new Hond("Toby")
];

for (const dier of dieren) {
    console.log(`een ${dier.getNaam()} doet ${dier.getGeluid()}`);
}