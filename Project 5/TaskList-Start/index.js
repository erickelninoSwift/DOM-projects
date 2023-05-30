// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import myLS from "./myLS.js";
import Task from "./MyTask.js";
import MyUI from "./MyUI.js";


const task = document.querySelector("#newtaskID");
const addTaskbutton = document.querySelector(".AddTaskBtn");
let taskList = document.querySelector(".task-list");

const userInterface = new MyUI();


const loaddata = () =>{

    let localdata = new myLS();
    let getAlldatasaved = localdata.fetchData();

    getAlldatasaved.forEach(element => {

        let customHtml = `
    
    <div class="task" data-createdat="${element.id}">
            <div class="task__details">
              <input type="checkbox" class="task-check" ${element.isCompleted ? "checked" : ""} />
              <label class="task-title">${element.title}</label>
            </div>

            <div class="task__op">
              <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
              <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
            </div>
    </div>
    `
    taskList.insertAdjacentHTML('afterbegin',customHtml);
    });
 }

 loaddata();



    addTaskbutton.addEventListener('click',(e) =>{
        e.preventDefault();
        if(document.querySelector("#newtaskID").value.trim().length > 0)
        {
            const localeStore = new myLS();
            const userTask = new Task(task.value);
       
            userInterface.myUiAddtoi(userTask,taskList);
    
            userInterface.resetform(task);
    
        }else
        {
            console.log("Please do not leave the field Empty");
        }
    });

document.querySelector(".task-list").addEventListener('click', (e) =>{
    e.preventDefault();
   if(e.target.className.includes('task__op_delete'))
   {
      userInterface.DeletePost(e);
      

   }
   
   if(e.target.className.includes('task-check'))
   {
       
        userInterface.checkUncheck(e);
       
   }

   if(e.target.className.includes('task__op_edit'))
   {

       userInterface.editTask(e);

   }

})



