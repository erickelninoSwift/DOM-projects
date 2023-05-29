// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
import myLS from "./myLS.js";
import Task from "./MyTask.js";
import MyUI from "./MyUI.js";


const task = document.querySelector("#newtaskID");
const addTaskbutton = document.querySelector(".AddTaskBtn");
let taskList = document.querySelector(".task-list");

const userInterface = new MyUI();

const localdata = myLS();


 const loaddata = () =>{

    console.log("Hello world");
 }


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
})

loaddata();