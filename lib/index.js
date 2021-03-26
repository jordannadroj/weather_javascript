// TODO: Write your JS code in here
import $ from 'jquery';
import 'select2';

import { currentWeather, searchWeather, displayData } from './weather';

$('#city-input').select2();

const cities = ["Amsterdam", "Bali", "Barcelona", "Belo Horizonte", "Berlin", "Bordeaux", "Brussels", "Buenos Aires", "Casablanca", "Chengdu", "Copenhagen", "Kyoto", "Lausanne", "Lille", "Lisbon", "London", "Lyon", "Madrid", "Marseille", "Melbourne", "Mexico", "Milan", "Montréal", "Nantes", "Oslo", "Paris", "Rio de Janeiro", "Rennes", "Rome", "São Paulo", "Seoul", "Shanghai", "Shenzhen", "Singapore", "Stockholm", "Tel Aviv", "Tokyo"];

$('#city-input').select2({ data: cities, width: '50%' }); // <-- add the `data` and `width` options

const cityInput = document.getElementById("city-input");
console.log(cityInput);

const options = document.querySelectorAll("option");
// console.log(options.value);
options.forEach((option) => {
  // console.log(option);
  option.addEventListener('change', (event) => {
    // console.log("foo");
    event.preventDefault();
    console.log("foo");
    console.log(option.value);
  });
});

cityInput.addEventListener('change', (event) => {
  event.preventDefault();
  console.log("foo");
});

// search.addEventListener('submit', (event) =>{
//   console.log("foo");
// });

// cityInput.addEventListener('click', (event) => {
//   event.preventDefault();
//   console.log(event);
//   searchWeather(cityInput.value);
// });

const url = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=582a7b39df764d4237a9f75e0b52f085";
const search = document.getElementById("search");
const text = document.getElementById("text");
const submit = document.getElementById("submit");
const heading = document.getElementById("heading");
const date = document.getElementById("date");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const current = document.querySelector("a");
const image = document.querySelector("#image");


search.addEventListener('submit', (event) => {
  event.preventDefault();
  searchWeather(cityInput.value);
});

// const searchFunction = search.addEventListener("submit", (event) => {
//   event.preventDefault();
//   searchWeather(text.value);
// });
