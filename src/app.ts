
class Invoice {
    readonly client : string;
    private details : string;
    public amount : number;

    constructor(c : string , d : string , a : number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        // this.client = "haumba"; // error
        console.log(`${this.client} has to pay ${this.amount} for ${this.details}`);
    }
}

let invOne = new Invoice("mario","jumping",100);
let invTwo = new Invoice("luigi","jumping",80);

// invOne.detail = "running";  error,detail is not even visible outside the class
invOne.amount = 110;

let invoices : Invoice[] = [];
invoices.push(invOne,invTwo);

console.log(invoices);

invoices.forEach((inv)=>{
    inv.format();
})

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