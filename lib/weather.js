const displayData = (data) => {
  // eslint-disable-next-line no-undef
  heading.innerText = `Weather in ${data.name}`;
  const dateNow = new Date();
  // eslint-disable-next-line no-undef
  date.innerText = `${dateNow.toDateString()}, ${dateNow.getHours()}:${dateNow.getMinutes()}`;
  // string from time
  // eslint-disable-next-line no-undef
  description.innerText = data.weather[0].description;
  // eslint-disable-next-line no-undef
  image.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  // eslint-disable-next-line no-undef
  temperature.innerText = `${Math.round(data.main.temp - 273.15)}°C`;
};

const currentWeather = (lat, lon) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=582a7b39df764d4237a9f75e0b52f085`)
    .then(response => response.json())
    .then(displayData);
};

const searchWeather = (query) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=582a7b39df764d4237a9f75e0b52f085`)
    .then(response => response.json())
    .then(displayData);
};

navigator.geolocation.getCurrentPosition((data) => {
  currentWeather(data.coords.latitude, data.coords.longitude);
});

export { currentWeather, searchWeather, displayData };
