import { appState } from "../AppState.js";
import { SandboxServer } from "../Services/AxiosService.js";
import { sandboxImagesService } from "../Services/SandboxImagesService.js";
import { sandboxWeatherService } from "../Services/SandboxWeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function drawWeather(){
  // @ts-ignore
setHTML('weather', appState.sandboxWeather.WeatherTemplate)

}

export class SandboxWeatherController{
  constructor(){
    this.getSandboxWeather()
    appState.on('sandboxWeather', drawWeather)
  }

  
      
 
  async getSandboxWeather(){
    try {
      await sandboxWeatherService.getSandboxWeather()
    } catch (error) {
      console.error('[sandboxWeather]', error);
      Pop.error(error)
      
    }
}
  
async toggleTemp(){
    try {
      await sandboxWeatherService.toggleTemp()
    } catch (error) {
      console.error('[toggle]', error);
      
    }
  }
}
    // this.tempF = Math.ceil((this.tempC*1.8) +  32)