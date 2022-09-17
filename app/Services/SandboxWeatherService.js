import { appState } from "../AppState.js";
import { SandboxWeather } from "../Models/SandboxWeather.js";
import { Pop } from "../Utils/Pop.js";
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
}

export const sandboxWeatherService = new SandboxWeatherService()