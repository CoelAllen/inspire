export class SandboxWeather{

  constructor(data){
    this.tempC = Math.ceil(data.temp-=273);
    this.tempF = Math.ceil((this.tempC*1.8)+32)
    this.currentTemp = true
  }

  
  get WeatherTemplate(){
    return /*html*/ `
    <div class="opacity-75 text-center" >
            <div class="temp rounded text-light">
              <h1>${this.tempC} C</h1>
            </div>
          </div>
              
    `
              
  }
get WeatherFTemplate(){
    return /*html*/ `
    <div class="opacity-75 text-center" >
            <div class="temp rounded text-light">
              <h1>${this.tempF} F</h1>
            </div>
          </div>
              
    `
              
  }
}
