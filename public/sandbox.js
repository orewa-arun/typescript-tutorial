"use strict";
// ? means optional
let calc;
// calc can now only be according to the above signature
calc = (a, b, action) => {
    let result;
    switch (action) {
        case 'add':
            result = a + b;
            break;
        case 'sub':
            result = a - b;
            break;
        default:
            result = (-10) ** 7;
    }
    return result;
};
console.log(calc(3, 7, "add"));
console.log(calc(5, 6));
let divineVisionary;
divineVisionary = (student, magicLvl) => {
    let chance = 0;
    chance += 0.006 * magicLvl;
    chance += 0.004 * student.level;
    return (chance > 1);
};
const mash = {
    name: "mash",
    dorm: "adler",
    level: 500
};
console.log(divineVisionary(mash, 0));
