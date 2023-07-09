import {hasFormatter} from "../interfaces/hasFormatter.js";

export class Invoice implements hasFormatter{
    readonly client : string;
    public details : string;
    private amount : number;
    
    constructor(c : string, d : string, a : number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        console.log(`${this.client} was paid 
        ${this.amount} for ${this.details}`);
    }

    // won't cause error because implements only demand the
    // existence of format(),doesn't matter if you object has extra 
    // members
    format2(){
        console.log("this may work!");
    }
}