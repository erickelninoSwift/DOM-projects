// Code Starts Here..
const form = document.querySelector("#form")
const message = document.querySelector(".message");


console.log(form); 

let isValid = false;

function validateForm(){
    isValid = form.checkValidity();

   if(!isValid)
   {
        message.textContent = "Please fill out the form ";
        message.style.color = "red";
        
   }

   console.log(isValid);
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    console.log(`Hello world`);
    console.log(e.target);
    validateForm();
});