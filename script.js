let inputBox=document.querySelector(".input-box")
let searchBtn=document.querySelector("#searchBtn")
let weather_img=document.querySelector(".weather-image")
let tempreture=document.querySelector(".tempreture")
let description=document.querySelector(".description")
let humidity=document.querySelector(".humiditys")
let wind_speed=document.querySelector(".wind-speed")
const location_not_found=document.querySelector(".location-not-found")
const weather_body=document.querySelector(".weather-body")

async function checkWeather(city){
    const api_key="66d140002d10f0398d13c106fd1a0f9f";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

const weather_data=await fetch(`${url}`).then((response)=>
response.json());
if(weather_data.cod===`404`){
    location_not_found.style.display="flex"
    weather_body.style.display="none"
}else{
 location_not_found.style.display="none"
    weather_body.style.display="flex"
}

tempreture.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`

description.innerHTML=`${weather_data.weather[0].description}`

humidity.innerHTML=`${weather_data.main.humidity}%`

wind_speed.innerHTML=`${weather_data.wind.speed}km/h`

switch(weather_data.weather[0].main){
case 'Clouds':
    weather_img.src="cloud.png";
    break;
    case 'Clear':
    weather_img.src="clear.png";
    break;
    case 'Rain':
    weather_img.src="rain.png";
    break;
    case 'Mist':
        weather_img.src="mist.png"
        break;
    case 'Snow':
    weather_img.src="snow.png";
    break;
}
}
searchBtn.addEventListener('click',()=>{
     checkWeather(inputBox.value);
})