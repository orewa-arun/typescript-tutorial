import {hasFormatter} from "./interfaces/hasFormatter.js";
import {Invoice} from "./classes/Invoices.js";
import {Payment} from "./classes/Payments.js";
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector(".new-tx-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

let ul = document.querySelector(".item-list") as HTMLUListElement;
let list = new ListTemplate(ul);
// console.log(list);

form.addEventListener('submit', (e : Event) => {
    // prevents loss of data after button clicks
    e.preventDefault();

    let doc : hasFormatter;

    if (type.value === "invoice"){
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }else {
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);
    }
    list.render(doc,type.value,"end");

    console.log(doc);
});

// Enums associate the values with numbers
enum plasticTypes {PVC,LOOSE,HARD};

console.log(plasticTypes.HARD);