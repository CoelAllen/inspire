import { appState } from "../AppState.js";
import { SandboxQuote } from "../Models/SandboxQuote.js";
import { SandboxServer } from "./AxiosService.js";

class SandboxQuotesService{
  async getSandboxQuotes(){
    const res = await SandboxServer.get ('/quotes/')
    appState.sandboxQuote = new SandboxQuote(res.data)
  }
}
export const sandboxQuotesService = new SandboxQuotesService()