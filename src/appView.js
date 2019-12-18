export function displayWeather(day,img,deg){
   
    let html = 
            `<div>
                <p>${day} </p>
                <img src="https://www.metaweather.com//static/img/weather/${img}.svg" alt="">
                <h2>${deg}&#176</h2>
            </div>`;

   return document.querySelector(".weatherIcons").insertAdjacentHTML("beforeend",html);

}

export function todayWeather(day,img,deg){
    let html = 
                `<img src="https://www.metaweather.com//static/img/weather/${img}.svg" alt="">
                <div> 
                   <p>${day}</p> 
                    <h2>${deg}&#176</h2>
                </div>`;
        return document.querySelector(".today").insertAdjacentHTML("beforeend",html);            
}

export function displayLoader(){
    let html = 
                `<div class="loader-06">
                </div> `;
    return  document.querySelector(".second").insertAdjacentHTML("afterbegin",html);           
}

export function removeLoader(){
    let load = document.querySelector("div.loader-06");
    let parentNode = load.parentNode;
    return parentNode.removeChild(load);
}

export function countryCity(country,city,weatherStateName,img,deg){
    let html = `<div class="location">
                <h3>${city}, ${country}</h3>
                <h4>${weatherStateName}</h4>
                </div>
                
                <div class="temp">
                <img src="https://www.metaweather.com//static/img/weather/${img}.svg" alt="${weatherStateName}">
                <h2>${deg}&#176</h2>
                </div>
                `;
    return document.querySelector(".displayWeather").insertAdjacentHTML("afterbegin",html);            
}

export function currentDate(){
    let todayDate = new Date();
    let html = ` <h3>${todayDate.toDateString()}</h3>`;
    return document.querySelector(".currentDate").insertAdjacentHTML("afterbegin",html);               
}

export function getDays(date){
    let day = new Date(date);
    let check = day.getDay();
    let weekDay = "";
    switch(check){
        case 0:
            weekDay = "Sunday";
            break;
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thurday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
        default :
            weekDay = "...";            
    }
    return weekDay;
}