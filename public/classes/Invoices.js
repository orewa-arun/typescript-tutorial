export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        console.log(`${this.client} was paid 
        ${this.amount} for ${this.details}`);
    }
    // won't cause error because implements only demand the
    // existence of format(),doesn't matter if you object has extra 
    // members
    format2() {
        console.log("this may work!");
    }
}
