// Code Starts Here..
const form = document.querySelector("#form")
const message = document.querySelector(".message");

const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const website = document.querySelector("#url");
const phoneNumber = document.querySelector("#tel");
const Email = document.querySelector("#email");
const password = document.querySelector("#password");
const reenterPassord = document.querySelector("#password2");



console.log(form); 

let isValid = false;

function validateForm(){
    isValid = form.checkValidity();

    let passwordValid = false;

   if(!isValid)
   {
        message.textContent = "Please fill out the form ";
        message.style.color = "red";
        
   }else
   {
     if(password.value === reenterPassord.value)
     {
        console.log('we good to go');
        message.style.display = "none";
        password.style.borderColor = "green"
        password.style.borderWidth = "2px";
        reenterPassord.style.borderColor = "green";
        reenterPassord.style.borderWidth = "2px";
        passwordValid = true;

        if(isValid && passwordValid)
       {
          message.textContent = "User Registered successfully";
          message.style.color = "green";
          message.style.fontSize = "20px";
   }
     }else
     {
        message.textContent = "Password are not Matching";
        message.style.color = 'Blue';
        password.style.borderColor = "red"
        password.style.borderWidth = "2px";
        reenterPassord.style.borderColor = "red";
        reenterPassord.style.borderWidth = "2px";
        passwordValid = false;
     }
   }

   
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    validateForm();
});