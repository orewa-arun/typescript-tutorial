"use strict";
// import {Invoice} from "./classes/Invoices.js";
const me = {
    name: "Arunkumar M",
    greet(sal) {
        console.log(`${sal} ${this.name}`);
    }
};
function greetMe(me) {
    me.greet("hola");
}
greetMe(me);
const form = document.querySelector(".new-tx-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    // prevents loss of data after button clicks
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
