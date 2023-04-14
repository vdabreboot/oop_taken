"use strict";

class DVDSpeler {
    #snelheid = 0;
    start(){
        this.#snelheid = 1;
        console.log(`Spelen op snelheid ${this.#snelheid}`);
    }
    spoelDoor(){
        this.#snelheid = this.#snelheid <= 1 ? 2 : this.#snelheid*=2;
        console.log(`Doorspoelen op snelheid ${this.#snelheid}`);
    }
    spoelTerug(){
        this.#snelheid = this.#snelheid >= -1 ? -2 : this.#snelheid*=2;
        console.log(`Terugspoelen op snelheid${this.#snelheid}`);
    }    
}

const speler =new DVDSpeler();
speler.start();
speler.spoelDoor();
speler.spoelDoor();
speler.spoelDoor();
speler.spoelTerug();
speler.spoelTerug();
speler.spoelDoor();
speler.start();
