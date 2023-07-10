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

    let values : [string,string,number];

    values = [tofrom.value,details.value,amount.valueAsNumber];

    let doc : hasFormatter;

    if (type.value === "invoice"){
        // ... is the spread operator
        doc = new Invoice(...values);
    }else {
        doc = new Payment(...values);
    }
    list.render(doc,type.value,"end");

    console.log(doc);
});