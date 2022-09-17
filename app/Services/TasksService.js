import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { SandboxServer } from "./AxiosService.js";

class TasksService{

  async addTask(formData){
    const res = await SandboxServer.post('coel/todos', formData)
    console.log(res.data, 'hello from addtask service');
    const newTask = new Task(res.data)
    appState.tasks = [...appState.tasks, newTask]
  }
  
  async getTasks(){
    const res = await SandboxServer.get('coel/todos')
    appState.tasks = res.data.map(t=> new Task(t))
  }

  async deleteTask(id){
    await SandboxServer.delete(`coel/todos/${id}`)
    appState.tasks = appState.tasks.filter(t=> t.id !=id)
  }

  async toggleTaskComplete(id){
    const task = appState.tasks.find(t=>t.id==id)
    if(!task){
      throw new Error('bad id')
    }
    task.completed = !task.completed
    await SandboxServer.put(`coel/todos/${id}`, task)
    appState.emit('tasks')
  }
}

export const tasksService = new TasksService()