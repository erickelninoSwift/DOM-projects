// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

console.log("E-Wallet $$$");

document.querySelector("#ewallet-form").addEventListener('submit', e =>{

   e.preventDefault();

   const type = document.querySelector(".add__type").value;
   const description = document.querySelector(".add__description").value;
   const values = document.querySelector(".add__value").value;

   console.log(type);
   console.log(description);
   console.log(values);


   const listTodolist = document.querySelector(".collection");

   const leftdata = document.createElement("div").value;
   const rightdata = document.createElement("div");
   const myitems = document.createElement("div");

   myitems.className = "item";


//    const sgnClass = type === "-" ? "expense-amount" : "income-amount";
   
 
   addItems(type,description,values);

   listTodolist.insertAdjacentHTML('afterbegin',newHtml);

   restAllfields();
})

const restAllfields = () =>{

   document.querySelector(".add__type").value = "+";
   document.querySelector(".add__description").value = "";
   document.querySelector(".add__value").value = "";

}

function addItems(type,description,values)
{
    const newHtml = `<div class="item">
    <div class="item-description-time">
       <div class="item-description">
           <p>${description}</p>
       </div>
       <div class="item-time">
            <p>25 Feb, 06:45 PM</p>
       </div>
       </div>
   <div class="item-amount ${type === "-" ? "expense-amount" : "income-amount"}">
           <p>${type}$${values}</p>
           </div>
    </div>
`;
}