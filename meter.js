class Meter {
    #afstand;
    constructor(afstand){
        this.#afstand=afstand;
    }
    naarInches(){
        return this.#afstand*39.7;
    }
    naarYards(){
        return this.#afstand*1.0936;
    }
}

const m = new Meter(5);
console.log(`dit is ${m.naarInches()} inches`);
console.log(`dit is ${m.naarYards()} yards`);

