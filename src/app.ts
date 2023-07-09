
import {Invoice} from "./classes/Invoices.js";
import { hasFormatter } from "./interfaces/hasFormatter.js";

const invOne : hasFormatter = new Invoice("mario","jumping",1000);
console.log(invOne);

// invOne only has format() method in accordance with
// the hasFormatter interface
invOne.format();

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