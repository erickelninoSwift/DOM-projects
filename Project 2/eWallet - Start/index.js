// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

console.log("E-Wallet $$$");

const listTodolist = document.querySelector(".collection");

document.querySelector("#ewallet-form").addEventListener('submit', e =>{

   e.preventDefault();

   const type = document.querySelector(".add__type").value;
   const description = document.querySelector(".add__description").value;
   const values = document.querySelector(".add__value").value;
   const currentTime = document.querySelector(".item-time").children[0];



//    const listTodolist = document.querySelector(".collection");

   const leftdata = document.createElement("div").value;
   const rightdata = document.createElement("div");
   const myitems = document.createElement("div");
  

   myitems.className = "item";

   
//    const sgnClass = type === "-" ? "expense-amount" : "income-amount";
   if(description.trim().length > 0 && values.length > 0)
   {
   
    const addedTask = addItems(type,description,values,formatDate());
  
    listTodolist.insertAdjacentHTML('afterbegin', addedTask);
    
    restAllfields();
    showTotalIncome();   
    showTotalexpenses();

   }else
   {
    restAllfields();
     alert("Please make sure you have entered the description");
     showTotalIncome();
     showTotalexpenses();
   }
  
  
})

const restAllfields = () =>{

   document.querySelector(".add__type").value = "+";
   document.querySelector(".add__description").value = "";
   document.querySelector(".add__value").value = "";

}


function formatDate()
{
    const now = new Date();

    const nowDate = now.toLocaleTimeString('en-us',{
        month:'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const newDataformat = nowDate.split(",")[0].split(" ");
   
    return `${newDataformat[1]} ${newDataformat[0]}, ${nowDate.split(',')[1]}`;
   
}

function addItems(mytype,mydescription,Myvalues,myTime)
{

    const newHtml = `<div class="item">
    <div class="item-description-time">
       <div class="item-description">
           <p>${mydescription}</p>
       </div>
       <div class="item-time">
            <p>${myTime}</p>
       </div>
       </div>
   <div class="item-amount ${mytype === "-" ? "expense-amount" : "income-amount"}">
           <p>${mytype}$${Myvalues}</p>
           </div>
    </div>
    
`;

 addItemsTolocalStorage(mytype,mydescription,Myvalues,myTime);

return newHtml;
}


function getItesmFromLS()
{
    let getItems = localStorage.getItem("items");
  
    if(getItems)
    {
        getItems = JSON.parse(getItems);

       return getItems;
    }
}


function populateData()
{
    let localItems = getItesmFromLS();

    if(localItems)
    {

    console.log(localItems);

    localItems.forEach(index => {
        
        const mytype1 = index.mytype;
        const mydescription1  = index.mydescription;
        const Myvalues1 = index.Myvalues;
        const mytime1 = index.myTime;

        const newhtml2 =  `<div class="item">
        <div class="item-description-time">
           <div class="item-description">
               <p>${mydescription1}</p>
           </div>
           <div class="item-time">
                <p>${mytime1}</p>
           </div>
           </div>
       <div class="item-amount ${mytype1 === "-" ? "expense-amount" : "income-amount"}">
               <p>${mytype1}$${Myvalues1}</p>
               </div>
        </div>
        
    `
        listTodolist.insertAdjacentHTML('afterbegin', newhtml2);
    });
    } 
}

const addItemsTolocalStorage = (mytype,mydescription,Myvalues,myTime) =>{

    let items = localStorage.getItem("items");

    if(items)
    {
        items = JSON.parse(items);
    }else
    {
        items = [];
    }

    items.push({
        mytype: mytype,
        mydescription: mydescription,
        Myvalues: Myvalues,
        myTime: myTime
    });

    localStorage.setItem("items",JSON.stringify(items));
}


const showTotalIncome = () =>{

    let Income = 0;

    let localItems = getItesmFromLS();
     if(localItems)
     {
         
    for(let index of localItems)
    {
        if(index.mytype === '+')
        {
            let value = parseInt(index.Myvalues)
            Income = Income + value;
        }
    }

    document.querySelector(".income__amount p").innerHTML = `$${Income}`;
     }

   console.log(`income: ${Income}`);

}

const showTotalexpenses = () =>{

    let expenses = 0;


    let localItems = getItesmFromLS();
     if(localItems)
     {
         
    for(let index of localItems)
    {
        if(index.mytype === '-')
        {
            let value = parseInt(index.Myvalues)
            expenses = expenses + value;
        }
    }

    document.querySelector(".expense__amount p").innerHTML = `$${expenses}`
     }

   console.log(`expenses: ${expenses}`);

}

showTotalIncome();
showTotalexpenses();
populateData();

