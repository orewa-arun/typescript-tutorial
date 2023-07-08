// array

let houses = ["adler","orca"];

houses.push("lang");
// shows error if you try to enter type that is not in the array
// houses.push(3);

//objects
let student = {
    name : "mash",
    age : 17,
    magic : "muscle" 
}

// cannot change type of object parameters
// student.age = "hello";

student.age = 18;

console.log(houses,student)