const API_KEY = "a788726a85a339db80aee11dcfdc634c";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  console.log("You live in", lat, log);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerHTML = `${data.weather[0].main} / `;
      city.innerHTML = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
