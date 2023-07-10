import { Invoice } from "./classes/Invoices.js";
import { Payment } from "./classes/Payments.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const form = document.querySelector(".new-tx-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
let ul = document.querySelector(".item-list");
let list = new ListTemplate(ul);
// console.log(list);
form.addEventListener('submit', (e) => {
    // prevents loss of data after button clicks
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
// Enums associate the values with numbers
var plasticTypes;
(function (plasticTypes) {
    plasticTypes[plasticTypes["PVC"] = 0] = "PVC";
    plasticTypes[plasticTypes["LOOSE"] = 1] = "LOOSE";
    plasticTypes[plasticTypes["HARD"] = 2] = "HARD";
})(plasticTypes || (plasticTypes = {}));
;
console.log(plasticTypes.HARD);
