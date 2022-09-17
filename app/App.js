import { SandboxImagesController } from "./Controllers/SandboxImagesController.js";
import { SandboxQuoteController } from "./Controllers/SandboxQuoteController.js";
import { SandboxWeatherController } from "./Controllers/SandboxWeatherController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
 
  sandboxImagesController = new SandboxImagesController()

  sandboxWeatherController = new SandboxWeatherController()

  sandboxQuoteController = new SandboxQuoteController()

  tasksController = new TasksController()

  
}
function currentTime(){
let date = new Date()
  let hh = date.getHours()
  let mm = date.getMinutes()
  let session = 'AM'

  if(hh == 0){
    hh = 12;
  }
  if (hh > 12){
    hh = hh - 12;
    session = "PM"
  }

  hh = (hh < 10) ? "" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  

  let time = hh + ":" + mm + " " + session;

  document.getElementById('clock').innerText = time
  let t = setTimeout(function(){currentTime()}, 1000)
  }
  
  currentTime()
  window["app"] = new App();

