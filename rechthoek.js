"use strict";

class Rechthoek {
    #lengte;
    #breedte;
    constructor(lengte,breedte){
        this.#lengte = lengte;
        this.#breedte = breedte;        
    }
    getOmtrek(){
        return (this.#breedte + this.#lengte)*2;
    }
    getOppervlakte(){
        return (this.#breedte * this.#lengte);
    }
}

const r1 = new Rechthoek(5,5);
console.log(`Omtrek is ${r1.getOmtrek()}`);
console.log(`Omtrek is ${r1.getOppervlakte()}`);