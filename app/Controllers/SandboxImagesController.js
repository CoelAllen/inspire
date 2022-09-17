import { appState } from "../AppState.js";
import { SandboxImage } from "../Models/SandboxImage.js";
import { sandboxImagesService } from "../Services/SandboxImagesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function drawImage(){
  let image = appState.sandboxImage
 // @ts-ignore
 document.querySelector('body').style.backgroundImage = `url(${image?.largeImgUrl})`
}

export class SandboxImagesController{
  constructor(){
    this.getSandboxImage()
    appState.on('sandboxImage', drawImage)
  }

  async getSandboxImage(){
    try {
      await sandboxImagesService.getSandboxImage()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
      
    }
  }
}