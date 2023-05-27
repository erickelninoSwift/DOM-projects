
function MyUI()
{


    MyUI.prototype.myUiAddtoi = function(usertask,taskList)
    {

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

      let checked1= !yolo.target.checked;

      // taskCompleted.includes("completed") ? complete.classList.remove("completed") : complete.classList.add("completed");

      console.log(complete.classList.toggle("completed"));
      complete.classList.toggle("completed") ? yolo.target.checked : 
      !yolo.target.checked;
      
    }
   
}



export default MyUI;