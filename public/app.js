"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        console.log(`${this.client} has to pay ${this.amount} for ${this.amount}`);
    }
}
let invOne = new Invoice("mario", "jumping", 100);
let invTwo = new Invoice("luigi", "jumping", 80);
let invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
invoices.forEach((inv) => {
    inv.format();
});
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
