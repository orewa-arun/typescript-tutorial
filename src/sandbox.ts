type stringOrNumber = string|number;
type studentWithMagic = { 
    name:string, 
    dorm : string,
    magic : stringOrNumber
};

const magician = (student : studentWithMagic) : boolean => {
    if (student.magic === 0 ){
        return false;
    }
    return true;
}

let mash : studentWithMagic = {
    name : "mash",
    dorm : "adler",
    magic : 0
};    

console.log(magician(mash));