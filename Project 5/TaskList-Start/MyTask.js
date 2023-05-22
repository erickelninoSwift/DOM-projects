function Task(Title)
{
    this.id = new Date().toLocaleString();
    this.title = Title;
    this.isCompleted = false;

}

export default Task;