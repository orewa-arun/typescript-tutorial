
export class Invoice{
    readonly client : string;
    public details : string;
    private amount : string;
    
    constructor(c : string, d : string, a : string){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        console.log(`${this.client} was paid 
        ${this.amount} for ${this.details}`);
    }
}