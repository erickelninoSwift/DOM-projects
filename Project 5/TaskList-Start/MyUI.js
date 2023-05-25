

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
     document.querySelector(".task-List")
    }
   
}



export default MyUI;