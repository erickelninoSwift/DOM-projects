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
    const userTask = new Task(task.value);
    const UserIterface = new MyUI(userTask.title,taskList);

    console.log(userTask);
    console.log(UserIterface);
    console.log(localeStore);
    
});