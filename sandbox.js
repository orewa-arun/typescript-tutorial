// In ts,the error checks are done before compiling it to js so
// the compiled js may just be simple without the checks we did in ts
// typescript infers the type
// based on the value assigned
var student = "mash";
var age = 17;
var HasMagic = true;
// student = 20; // shows error
HasMagic = false; // allowed
// in ts ,we can define what type of argument one should receive
var circumference = function (radius) { return 2 * radius * Math.PI; };
console.log(circumference(7));
