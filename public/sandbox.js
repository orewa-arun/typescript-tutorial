"use strict";
let greet;
greet = function (greetings) {
    console.log(`${greetings} mate!`);
};
greet("vanakkam");
greet("namaskaaram");
// return type is number
const add = (a, b, c = 10) => {
    return a + b + c;
};
// result infers its type as add() return type : number
let result = add(2, 3, 4);
console.log(result);
