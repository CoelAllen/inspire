export class SandboxWeather{

  constructor(data){
    this.tempC = Math.ceil(data.temp-=273);
    this.tempF = Math.ceil((this.tempC*1.8) +  32)
    
  }

  
  get WeatherTemplate(){
    return /*html*/ `
    <div class="card opacity-75 text-center" >
            <div class="card-body">
              <h1>${this.tempC} C</h1>
            </div>
          </div>
              
    `
              
  }
  // get WeatherCelsiusTemplate(){
  //    return /*html*/ `
  //   <div class="card opacity-75 text-center">
  //           <div class="card-body" ">
  //             <h1>${this.currentTemp}</h1>
              
  //             </div>
  //             </div>
  //   `
  // }
}
