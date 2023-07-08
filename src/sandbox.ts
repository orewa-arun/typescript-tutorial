let greet : Function;

greet = function (greetings:string) : void {
    console.log(`${greetings} mate!`);
}

greet("vanakkam");
greet("namaskaaram");

// return type is number
const add = (a : number, b:number ,c:number = 10) : number => {
    return a+b+c;
}

// result infers its type as add() return type : number
let result = add(2,3,4);

console.log(result);