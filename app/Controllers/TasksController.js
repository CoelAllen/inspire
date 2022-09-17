import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { SandboxServer } from "../Services/AxiosService.js";
import { tasksService } from "../Services/TasksService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function drawTasks(){
  let template = ''
  appState.tasks.forEach(t=> template += t.TaskTemplate)
  setHTML('tasks', template)
  setText('total-tasks', appState.tasks.length)
  setText('completed-tasks')
}
export class TasksController{
  constructor(){
    console.log("hello from taskscontroller");
    this.getTasks()
    appState.on('tasks', drawTasks)
    
   }

   async addTask(formData){
    try {
      console.log('adding task');
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target;
      let formData = getFormData(form)
      await tasksService.addTask(formData);
      console.log(formData);
      Pop.success('Task Added')
      // @ts-ignore
      form.reset()
      
    } catch (error) {
      console.error("[addTask]", error);
    }

      
      
    
   }
   async getTasks(){
    try {
      await tasksService.getTasks()
    } catch (error) {
      console.error('[getTasks]', error);
      
    }
   }
   async deleteTask(id){
    try {
      const yes = await Pop.confirm('Remove this task?')
      if(!yes){ return }
      await tasksService.deleteTask(id)
    } catch (error) {
      console.error('[deleteTask]',error);
      Pop.error(error)
      
    }

   }
   async toggleTaskComplete(id){
     try {
       await tasksService.toggleTask(id)
    } catch (error) {
      console.error('[toggleTask]',error);
      Pop.error(error)
      
    }
  }

}