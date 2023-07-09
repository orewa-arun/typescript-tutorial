
// import {Invoice} from "./classes/Invoices.js";

interface isPerson {
    name : string;
    greet( s : string) : void;
}

const me : isPerson = {
    name : "Arunkumar M",
    greet(sal : string){
        console.log(`${sal} ${this.name}`);
    }
}

function greetMe(me : isPerson) {
    me.greet("hola");
}

greetMe(me);

const form = document.querySelector(".new-tx-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e : Event) => {
    // prevents loss of data after button clicks
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});