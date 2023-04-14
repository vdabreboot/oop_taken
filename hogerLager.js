"use strict";

class HogerLager {
    #teRadenGetal = Math.floor(Math.random(9)*10)+1;
    #aantalPogingen=0;
    gok(getal){
        this.#aantalPogingen++;
        if (getal === this.#teRadenGetal){
            return true;
        } else if (getal <= this.#teRadenGetal) {
            console.log("Het getal is groter");
            return false;
        } else {
            console.log("Het getal is kleiner");
            return false;
        }
    }
    getAantalPogingen(){
        return this.#aantalPogingen;
    }
}

const spel = new HogerLager();

while (!spel.gok(Number(prompt("Geef een getal")))){
    
}
console.log(`U had ${spel.getAantalPogingen()} pogingen node`);
