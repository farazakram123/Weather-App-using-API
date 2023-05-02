const fun1 = () => {
  let cityName = document.getElementById("searchCity").value;
  city_name.innerHTML = cityName;
  getWeather(cityName);
};
let form = document.getElementById("form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "40bfc1269fmsh823a684c9fddf18p1755fajsn1bc55aef13bc",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  // console.log(city);
  city_name.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      // sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
getWeather("Delhi");

const getAllWeatherLondon = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      london_cloud_pct.innerHTML = response.cloud_pct;
      london_feels_like.innerHTML = response.feels_like;
      london_humidity.innerHTML = response.humidity;
      london_max_temp.innerHTML = response.max_temp;
      london_min_temp.innerHTML = response.min_temp;
      london_temp.innerHTML = response.temp;
      london_sunrise.innerHTML = response.sunrise;
      london_wind_speed.innerHTML = response.wind_speed;
      london_sunset.innerHTML = response.sunset;
      london_wind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));
};

const getAllWeatherNY = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      ny_cloud_pct.innerHTML = response.cloud_pct;
      ny_feels_like.innerHTML = response.feels_like;
      ny_humidity.innerHTML = response.humidity;
      ny_max_temp.innerHTML = response.max_temp;
      ny_min_temp.innerHTML = response.min_temp;
      ny_temp.innerHTML = response.temp;
      ny_sunrise.innerHTML = response.sunrise;
      ny_wind_speed.innerHTML = response.wind_speed;
      ny_sunset.innerHTML = response.sunset;
      ny_wind_degrees.innerHTML = response.wind_degrees;
    })
    .catch((err) => console.error(err));
};

getAllWeatherLondon("London");
getAllWeatherNY("New York");
