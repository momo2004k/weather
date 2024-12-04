//state

let currCity = "London";
let units = "metric";

let city = document.querySelector(".weather__city");
let datetime =document.querySelector(".weather__datetime");
let weather__forecast = document.querySelector(".weather_forecast");
let weather__temperature =document.querySelector(".weather__temperature");
let weather_icon= document.querySelector(".weather_icon");
let weather__minmax =document.querySelector(".weather_minmax");
let weather_realfeel =document.querySelector('.weather__realfeel'); 
let weather_humidity =document.querySelector('.weather_humidity');
let weather_wind =document.querySelector('.weather_wind');
let weather_pressure =document.querySelector('.weather_pressure');
//search

document.querySelector(".weather__search").addEventListener('submit',e =>{
     let search = document.querySelector(".weather_searchform");
     e.preventDefault();
     currCity = search.value;
     getWeather(); 

     search.value=""

})

document.querySelector(".weather_unit_celsius").addEventListener('click', () =>{
     if (units !== "metric"){
     units = "metric"
     getWeather()
     }
    })
    
    document.querySelector(".weather_unit_farenheit").addEventListener('click', () =>{
    
    if(units !== "imperial"){ 

    units ="imperial"
    getWeather()
    }
    })
    
    function convertTimestamp(timestamp, timezone) {
      const convertTimezone = timezone /3600;
      const date = new Date(timestamp * 1000);
      const options = {
    
      weekday: "Long",
      day: "numeric",
      month: "long", 
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timezone: `Etc/GMT ${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
      hour12: true
    }
    return date.toLocaleString("en-US", options)
}
    
    
    function convertCountryCode(country){

       let regionNames = new Intl. DisplayNames(["en"], {type: "region"});
    
    return regionNames.of(country)
    }