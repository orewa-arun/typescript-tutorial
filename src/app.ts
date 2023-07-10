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

// generics
// whatever T you allot will be used in the function/object
 const dormAllotment = <T extends object>(house : T) => {
    const uid = Math.random();

    // ... includes the uid into the object
    console.log({...house,uid});
 }

// dormAllotment("Adler");
dormAllotment({name : "adler"});

// T must have {strength : number}
// It can have extras
interface dorm<T extends {strength : number}>{
    name : string,
    total : T
}

const adler : dorm<{strength : number , magicLvl : number}> = {
    name : "adler",
    total : {strength : 2300 , magicLvl : 2000}
}

console.log(adler);