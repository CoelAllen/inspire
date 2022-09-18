import { appState } from "../AppState.js";
import { SandboxWeather } from "../Models/SandboxWeather.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { SandboxServer } from "./AxiosService.js";

class SandboxWeatherService{
  async getSandboxWeather(){
    try {
      const res = await SandboxServer.get('weather/')
      appState.sandboxWeather = new SandboxWeather(res.data.main)
    } catch (error) {
      console.error("[getWeather]", error);
      Pop.error(error)
      }
  }

toggleTemp() {
  let weather= appState.sandboxWeather
  // @ts-ignore
  let currentTemp = appState.sandboxWeather.currentTemp
  if (currentTemp == true) {
    // @ts-ignore
    appState.sandboxWeather.currentTemp = false
    // @ts-ignore
    setHTML('weather', weather.WeatherFTemplate)
  }else{
    // @ts-ignore
    appState.sandboxWeather.currentTemp = true
    // @ts-ignore
    setHTML('weather', weather.WeatherTemplate)
   
  }
}
}
  


export const sandboxWeatherService = new SandboxWeatherService()
