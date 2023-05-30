import myLS from "./myLS.js";


function MyUI()
{


   

    MyUI.prototype.myUiAddtoi = function(usertask,taskList)
    {

      
      const local = new myLS()

      // local.fetchData();

      let customHtml = `
    
    <div class="task" data-createdat="${usertask.id}">
            <div class="task__details">
              <input type="checkbox" class="task-check" />
              <label class="task-title">${usertask.title}</label>
            </div>

            <div class="task__op">
              <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
              <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
            </div>
    </div>
    `
     
    taskList.insertAdjacentHTML('afterbegin',customHtml);

    local.savedata(usertask);

    }

    

    MyUI.prototype.resetform = function()
    {
      document.querySelector("#newtaskID").value = "";
      document.querySelector("#newtaskID").style.placeHolder = "Add new task here ...";
    }

    MyUI.prototype.DeletePost = function(element)
    {
      const local = new myLS()

       const dataTodelele = element.target.parentElement.parentElement;
  
       const dataID = dataTodelele.dataset.createdat;
       dataTodelele.remove();
       local.deleteData(dataID);
       
    }

    MyUI.prototype.checkUncheck = function(yolo)
    {
      const local = new myLS();

      const complete = yolo.target.parentElement.parentElement;
      const taskCompleted = complete.className;
      const taskid =  complete.dataset.createdat
      console.log(complete);
      local.checkComplete(taskid);

      complete.classList.toggle("completed");

      
    }

    MyUI.prototype.editTask = function(taskToEdit)
    {
      const local = new myLS();

      let task = taskToEdit.target.parentElement.parentElement;
      let taskIDtoedit = task.dataset.createdat;
      let fetchData = local.fetchData();

     if(fetchData)
     {
        let index = fetchData.findIndex(data =>{
        return data.id === taskIDtoedit;});
        
        document.querySelector(".newtask__input").children[0].style.display = "none";
       let updateInput =  document.querySelector(".newtask__input").children[1];
        updateInput.style.display = "block"

       updateInput.value = `${fetchData[index].title}`;

       document.querySelector(".AddTaskBtn").style.display ="none";
       const edittaskButton = document.querySelector(".EditTaskBtn")
       edittaskButton.style.display = "inline";
       edittaskButton.addEventListener('click', e =>{
        
        e.preventDefault();
          let newTaskTitle = document.querySelector("#updateTaskID").value;

          console.log(newTaskTitle);

          fetchData[index].title = newTaskTitle;

          local.deleteData(fetchData[index]);

          local.savedata(fetchData[index]);

          edittaskButton.style.display = "none"
          document.querySelector(".AddTaskBtn").style.display = "inline";
          document.querySelector(".newtask__input").children[0].style.display = "inline";
          updateInput.style.display = "none";
          updateInput.value = "";
          

          location.reload();

       })

      
     }
    
    }
   
}



export default MyUI;