"use strict";
const magician = (student) => {
    if (student.magic === 0) {
        return false;
    }
    return true;
};
let mash = {
    name: "mash",
    dorm: "adler",
    magic: 0
};
console.log(magician(mash));
