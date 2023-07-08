// Assign the type explicitly
var slayerName;
var age;
var isHashira;
slayerName = "tanjiro";
var dorms;
// push won't work because only type of dorms is defined
// we have not yet assigned dorms = []
dorms = [];
dorms.push("adler");
// works
dorms = ["lang", "orca"];
console.log(dorms);
var mixed = [];
mixed.push("adler");
mixed.push(3);
console.log(mixed);
// object definition
var slayerOne;
slayerOne = {
    slayerName: "insouke",
    age: 16,
    isHashira: false
};
// object definition with definite properties
var slayerTwo;
slayerTwo = {
    name: "zenitsu",
    age: 18,
    isHashira: false
};
console.log(slayerOne, slayerTwo);
