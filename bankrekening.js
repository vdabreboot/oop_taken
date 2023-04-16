"use strict";

class Bankrekening {
    #saldo = 0;
    stort(bedrag){
        this.#saldo+=bedrag;
    }
    haalAf(bedrag){
        if (this.#saldo> bedrag) {  
            this.#saldo-=bedrag;
        } else {
            console.log("Onvoldoende provisie");
        }
    }
    getSaldo(){
        return this.#saldo
    }
}

const mijnRekening = new Bankrekening();
console.log(`Saldo : ${mijnRekening.getSaldo()}`);
mijnRekening.stort(500);
console.log(`Saldo : ${mijnRekening.getSaldo()}`);
mijnRekening.haalAf(300);
console.log(`Saldo : ${mijnRekening.getSaldo()}`);
mijnRekening.haalAf(300);
console.log(`Saldo : ${mijnRekening.getSaldo()}`);