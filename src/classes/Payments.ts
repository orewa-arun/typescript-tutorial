import {hasFormatter} from '../interfaces/hasFormatter';

export class Payment implements hasFormatter{
    
    constructor(
        readonly recipient : string,
        public details : string,
        private amount : number
    ){}

    format(): void {
        console.log(`${this.recipient} paid ${this.amount} for ${this.details}`);
    }
}
