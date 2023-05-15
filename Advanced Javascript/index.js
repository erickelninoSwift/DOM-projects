console.log("Advanced Javascript");

// ======================================

// Scope 


// For all of these, what is the value of a when the function gets called with the alert()
// #1

function userIsValid(bool)
{
    return bool;
}

var message = userIsValid(true) ? "Eriik is a good person" : "Anthony is a chef";

console.log(message);

console.log(`Account number # ${userIsValid(false) ? 1234567 : '00000'}`);


function moveCommand(direction)
{
    let number;

    switch(direction)
    {
        case "forward":
            number = "you encountered a monster";
            return number;
            break;
        case "backward":
            number ="you faced your old friend";
            return number;
            break;
    }
}


const datareceived = moveCommand("backward");

console.log(datareceived);


let hello = () =>{

    const greet = "jackpot";

    function final(){
        
    }

    return final;
}

const newHight = hello();

newHight();


const multiply = (a,b) => a * b;

const curreiedMultiply = (a)  => (b) =>{
    return a * b;
}

console.log(curreiedMultiply(3)(4));

const newone = (a,b) => (c) => a * b *c;


// compose

const number2 = (x,y) =>(a) =>x(y(a));


const number = (value) =>{
    return value + 1
}


const composed = number2(number,number)(10);

console.log(composed);


// ?Array advanced

const numbersArray = [10,20,30,40,50,60];


const newArra = numbersArray.map((num) =>{

    return num * 2;
});

console.log(numbersArray);
console.log(newArra);

//  Object advanced 


var a  = 5;
var b = a;

console.log(a);
console.log(b);



console.log("Coercion");

const num = 34;

console.log(num**2);

const elnino = {
    name:'eriik',
    surname:'tshimbombo'
};


Object.keys(elnino).forEach(index =>{
    console.log(index);
});

Object.values(elnino).forEach(index =>{
    console.log(index);
});

Object.entries(elnino).forEach(index =>{
    console.log(index[1]);
});

const array = [1,2,3,4,5];

console.log(array.flat());

const useremail = "      erickelmino@yahoo.com";

console.log(useremail.trimStart()); 


const basket = ["orange","banana"];

for(index of basket)
{
    console.log(`Hello ${index}`);
}

for(let index of basket)
{
    console.log(index)
}

console.log(Number.MAX_SAFE_INTEGER);

const erickelnino = {
    pichachu: {
        name:'pokemon',
      
    }
};

