import { generateId } from "../Utils/generateId.js";

export class Task{
  constructor(data){
    this.id = data.id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get TaskTemplate(){
    return /*html */ `
    <div class=" d-flex justify-content-between">
      <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.tasksController.toggleTask('${this.id}')">
      <li>${this.description}</li><i onclick = "app.tasksController.deleteTask('${this.id}')" class="mdi mdi-delete"></i>
    </div>
    `
  }
}
    