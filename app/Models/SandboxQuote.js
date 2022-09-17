export class SandboxQuote{
  constructor(data){
    this.author = data.author
    this.content = data.content

  }
  get QuoteTemplate(){
    return /*html*/ `
          <p>${this.content}
        </p>
         
    `
  }
}