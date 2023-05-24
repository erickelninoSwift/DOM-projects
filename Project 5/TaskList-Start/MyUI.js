

function MyUI(title,taskList)
{
    let customHtml = `
    
    <div class="task" data-createdat="12/12/2022, 6:59:55 PM">
            <div class="task__details">
              <input type="checkbox" class="task-check" />
              <label class="task-title">${title}</label>
            </div>

            <div class="task__op">
              <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
              <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
            </div>
    </div>
    `
    taskList.insertAdjacentHTML('afterbegin',customHtml);
}

export default MyUI;