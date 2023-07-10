import { hasFormatter } from "../interfaces/hasFormatter";

export class Invoice implements hasFormatter{
    readonly client : string;
    public details : string;
    private amount : number;
    
    constructor(c : string, d : string, a : number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() : string{
        return (`${this.client} was paid ${this.amount} for ${this.details}`);
    }
}