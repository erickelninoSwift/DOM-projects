import myLS from "./myLS.js";

function MyUI()
{


   

    MyUI.prototype.myUiAddtoi = function(usertask,taskList)
    {

      
      const local = new myLS()

      local.fetchData();

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

      local.checkComplete(taskid);

      complete.classList.toggle("completed");

      
    }
   
}



export default MyUI;