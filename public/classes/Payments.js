export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        console.log(`${this.recipient} paid ${this.amount} for ${this.details}`);
    }
}
