import myLS from "./myLS.js";

function MyUI()
{


   

    MyUI.prototype.myUiAddtoi = function(usertask,taskList)
    {


      const local = new myLS()
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
       const dataTodelele = element.target.parentElement.parentElement;
       dataTodelele.remove();
    }

    MyUI.prototype.checkUncheck = function(yolo)
    {
      const complete = yolo.target.parentElement.parentElement;
      const taskCompleted = complete.className;
      

      console.log(complete);
      complete.classList.toggle("completed");
      
    }
   
}



export default MyUI;