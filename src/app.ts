import {hasFormatter} from "./interfaces/hasFormatter.js";
import {Invoice} from "./classes/Invoices.js";
import {Payment} from "./classes/Payments.js";

const form = document.querySelector(".new-tx-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener('submit', (e : Event) => {
    // prevents loss of data after button clicks
    e.preventDefault();

    let doc : hasFormatter;

    if (type.value === "invoice"){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }else {
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);
    }

    doc.format();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});