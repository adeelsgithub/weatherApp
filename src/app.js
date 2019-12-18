import axios from "axios";
import * as view from "./appView";

let key = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api";

// first search for location , defaul location is karachi

async function searchForLoaction(location = "karachi"){
    view.displayLoader();
    let data = await axios(`${key}/location/search/?query=${location}`);
    return data;
}

async function getWeather(id){
    let data = await axios(`${key}/location/${id}`);
    return data;
 }

view.currentDate();

let sfl = searchForLoaction();
sfl.then((result)=>{
    //get the where on earth id  -> call getWeather 
   let woeid = result.data[0].woeid;
   getWeather(woeid).then(weatherData=>{
    
    view.removeLoader();
    
    view.countryCity(weatherData.data.parent.title,weatherData.data.title,weatherData.data.consolidated_weather[0].weather_state_name,weatherData.data.consolidated_weather[0].weather_state_abbr,Math.round(weatherData.data.consolidated_weather[0].the_temp));
    view.todayWeather("Today" , weatherData.data.consolidated_weather[0].weather_state_abbr, Math.round(weatherData.data.consolidated_weather[0].the_temp) );   
    weatherData.data.consolidated_weather.forEach((element,i=0) => {  
        view.displayWeather(view.getDays(element.applicable_date),element.weather_state_abbr,Math.round(element.the_temp));
        i++;
    });    
})

}).catch((e)=>{
    console.log(e);
});



