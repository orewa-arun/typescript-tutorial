// ? means optional
let calc : (a : number, b : number, c ? : string) => number;

// calc can now only be according to the above signature
calc = (a : number , b : number , action ?: string) => {
    let result : number;
    switch(action){
        case 'add' :
            result = a+b;
            break;
        case 'sub' :
            result = a-b;
            break;
        default : 
            result = (-10)**7;
    }
    return result;
}

console.log(calc(3,7,"add"));
console.log(calc(5,6));

type profile = {
    name : string,
    dorm : string,
    level : number,
};

let divineVisionary : (s : profile , magicLvl : number) => boolean ;

divineVisionary = (student : profile , magicLvl : number) => {
    let chance : number = 0;
    
    chance += 0.006 * magicLvl;
    chance += 0.004 * student.level;

    return (chance > 1);
}

const mash : profile = {
    name : "mash",
    dorm : "adler",
    level : 500
}

console.log(divineVisionary(mash,0));