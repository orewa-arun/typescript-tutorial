import { Invoice } from "./classes/Invoices.js";
const invOne = new Invoice("mario", "jumping", 1000);
console.log(invOne);
// invOne only has format() method in accordance with
// the hasFormatter interface
invOne.format();
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
