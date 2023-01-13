const API_KEY='f42562b10afcc4bdbe8346380d83deaa'
// const API=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'

const form=document.querySelector("form")
const weather=document.querySelector("#weather")
const search=document.querySelector("#search")

const getWeather=async(city)=>{
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  const response= await fetch(url);
  const data=await response.json();
  console.log(data);
  return showWeather(data);
}
const showWeather=(data)=>{
  if(data.cod=="404")
  {
    weather.innerHTML=`<h2>City Not Found</h2>`
    return;
  }
  weather.innerHTML=`<h2>Loading...</h2>`
  weather.innerHTML=`
  <div class="">
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
  </div>
  <div class="">
    <h2>${data.main.temp}°C</h2>
    <h4>${data.weather[0].main} </h4>
  </div>
  `
}
form.addEventListener(
  "submit",
  function(event)
  {
    getWeather(search.value)
    event.preventDefault();
  }
)
