import { appState } from "../AppState.js";
import { sandboxQuotesService } from "../Services/SandboxQuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function drawQuote(){
// @ts-ignore
setHTML('quote', appState.sandboxQuote.QuoteTemplate)
// @ts-ignore
setText('author', appState.sandboxQuote.author)

}

export class SandboxQuoteController {
  constructor(){
    this.getSandboxQuotes()
    appState.on('sandboxQuote', drawQuote)

  }

  async getSandboxQuotes(){
    try {
      await sandboxQuotesService.getSandboxQuotes()
    } catch (error) {
      console.error("[getquotes]", error);
      Pop.error(error)
      
    }
  }
}