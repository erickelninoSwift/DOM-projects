// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import myLS from "./myLS.js";
import Task from "./MyTask.js";
import MyUI from "./MyUI.js";



console.log("OOP project DOM");


const task = document.querySelector("#newtaskID");
const addTaskbutton = document.querySelector(".AddTaskBtn");
let taskList = document.querySelector(".task-list");

addTaskbutton.addEventListener('click',(e) =>{
    e.preventDefault();


    const localeStore = new myLS();
    const userTask = new Task();
    const UserIterface = new MyUI();
    

    let customHtml = `
    
    <div class="task" data-createdat="12/12/2022, 6:59:55 PM">
            <div class="task__details">
              <input type="checkbox" class="task-check" />
              <label class="task-title">${task.value}</label>
            </div>

            <div class="task__op">
              <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
              <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
            </div>
    </div>
    `
   taskList.insertAdjacentHTML('afterbegin',customHtml);


  console.log(task.value);
});