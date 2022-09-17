export class SandboxWeather{

  constructor(data){
    this.tempC = Math.ceil(data.temp-=273);
    this.tempF = Math.ceil((this.tempC*1.8) +  32)

  }

  
  get WeatherTemplate(){
    return /*html*/ `
    <div class="card opacity-75 text-center">
            <div class="card-body">
              <h1>${this.tempC}C</h1>
              <h1>${this.tempF}F</h1>
              </div>
              </div>
    `
              
  }
}
