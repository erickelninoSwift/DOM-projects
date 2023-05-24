function Task(Title)
{
    this.id = new Date().toLocaleString();
    this.title = Title;
    this.isCompleted = false;

    console.log(` This is my Task : ${this.title}`);
    console.log(` This is Task ID : ${this.id}`);
    console.log(` This comleted : ${this.isCompleted}`);

}

export default Task;