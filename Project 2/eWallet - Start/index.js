// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

console.log("E-Wallet $$$");

document.querySelector("#ewallet-form").addEventListener('submit', e =>{

   e.preventDefault();

   const type = document.querySelector(".add__type").value;
   const description = document.querySelector(".add__description").value;
   const values = document.querySelector(".add__value").value;

//    console.log(type);
//    console.log(description);
//    console.log(values);


   const listTodolist = document.querySelector(".collection");

   const leftdata = document.createElement("div").value;
   const rightdata = document.createElement("div");
   const myitems = document.createElement("div");

   myitems.className = "item";


//    const sgnClass = type === "-" ? "expense-amount" : "income-amount";
   if(description.trim().length > 0 && values.length > 0)
   {
    const addedTask = addItems(type,description,values);

    listTodolist.insertAdjacentHTML('afterbegin', addedTask);
 
    restAllfields();
   }else
   {
    restAllfields();
     alert("Please make sure you have entered the description");
     
   }
})

const restAllfields = () =>{

   document.querySelector(".add__type").value = "+";
   document.querySelector(".add__description").value = "";
   document.querySelector(".add__value").value = "";

}

function addItems(mytype,mydescription,Myvalues)
{
    const newHtml = `<div class="item">
    <div class="item-description-time">
       <div class="item-description">
           <p>${mydescription}</p>
       </div>
       <div class="item-time">
            <p>25 Feb, 06:45 PM</p>
       </div>
       </div>
   <div class="item-amount ${mytype === "-" ? "expense-amount" : "income-amount"}">
           <p>${mytype}$${Myvalues}</p>
           </div>
    </div>
`;

return newHtml;
}