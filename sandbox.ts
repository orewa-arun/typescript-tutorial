// Assign the type explicitly
let slayerName:string;
let age:number;
let isHashira:boolean;

slayerName = "tanjiro";

let dorms: string[];

// push won't work because only type of dorms is defined
// we have not yet assigned dorms = []
dorms = [];
dorms.push("adler");

// works
dorms = ["lang","orca"];

console.log(dorms);

let mixed: (string|number)[] = [];

mixed.push("adler");
mixed.push(3)

console.log(mixed);

// object definition
let slayerOne : object;

slayerOne = {
    slayerName : "insouke",
    age : 16,
    isHashira : false
};

// object definition with definite properties
let slayerTwo : {
    name : string,
    age: number,
    isHashira : boolean;
};

slayerTwo = {
    name : "zenitsu",
    age : 18,
    isHashira : false
};

console.log(slayerOne,slayerTwo);