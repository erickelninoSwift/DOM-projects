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


const hello = () =>{

    const greet = "jackpot";

    const final = () =>{
        alert(greet);
    }

}
