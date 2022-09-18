import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Task{
  constructor(data){
    this.id = data.id
    this.completed = data.completed || false
    this.user = data.user
    this.description = data.description
  }

  get TaskTemplate(){
    return /*html */ `
    
    <div class=" d-flex justify-content-between">
      <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.tasksController.toggleTaskComplete('${this.id}')">
      <li>${this.description}</li><i onclick = "app.tasksController.deleteTask('${this.id}')" class="mdi mdi-delete text-danger"></i>
    </div>
    `
  }
  
 
  
}
    