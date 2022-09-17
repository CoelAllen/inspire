import { appState } from "../AppState.js";
import { SandboxImage } from "../Models/SandboxImage.js";
import { SandboxServer } from "./AxiosService.js";

class SandboxImagesService {
  async getSandboxImage(){
    const res = await SandboxServer.get('/images/')
    appState.sandboxImage = new SandboxImage(res.data)
    
  }
}
export const sandboxImagesService = new SandboxImagesService()