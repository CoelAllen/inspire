import { appState } from "../AppState.js";
import { SandboxServer } from "../Services/AxiosService.js";
import { sandboxImagesService } from "../Services/SandboxImagesService.js";
import { sandboxWeatherService } from "../Services/SandboxWeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function drawWeather(){
  // @ts-ignore
setHTML('weatherF', appState.sandboxWeather.WeatherTemplate)
// @ts-ignore
setHTML('weatherC', appState.sandboxWeather.WeatherCelsiusTemplate)
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
}