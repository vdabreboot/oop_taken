"use strict";

class Punt {
    #x;
    #y;
    constructor(x,y){
        this.#x = x;
        this.#y = y;
    }
    getX(){
        return this.#x;        
    }
    getY(){
        return this.#y;
    }
}
class lijnStuk {
    #eindpunt1;
    #eindpunt2;
    constructor(eindpunt1,eindpunt2){
        this.#eindpunt1 = eindpunt1;
        this.#eindpunt2 = eindpunt2
    }
    isHorizontaal(){        
        return this.#eindpunt1.getX() === this.#eindpunt2.getX() ? true : false
    }
    isVerticaal(){
        return this.#eindpunt1.getY() === this.#eindpunt2.getY() ? true : false
    }
}

const lijnen = [
    new lijnStuk(new Punt(10,15), new Punt(10,10)),
    new lijnStuk(new Punt(10,20), new Punt(10,20)),
    new lijnStuk(new Punt(10,20), new Punt(12,10)),
];

lijnen.forEach( (lijn , index)  => {
    console.log(`is Lijn ${index} horizontaal : ${lijn.isHorizontaal()}` );
    console.log(`is Lijn ${index} verticaal  : ${lijn.isVerticaal()}` );
});
