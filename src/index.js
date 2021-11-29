let weatherType = ["Sun", "Rain", "Cloud", "Snow"];

new Date();
let now = new Date();

let date = now.getDate();
let hours = now.getHours();
let minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
let seconds = now.getSeconds();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augusut",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let h3 = document.querySelector("h3");
h3.innerHTML = `${day}, ${date} ${month}, ${year}`;
let h4 = document.querySelector("h4");
h4.innerHTML = `${hours}:${minutes}`;

function displayCity(event) {
  event.preventDefault();
  let input = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${input.value}`;
}
let form = document.querySelector("#search-bar");
form.addEventListener("submit", displayCity);

function convertToF() {
  let cTemp = 20;
  let fTemp = Math.round((cTemp * 9) / 5 + 32);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${fTemp}°F`;
}

function convertToC() {
  let fTemp = 68;
  let cTemp = Math.round(((fTemp - 32) * 5) / 9);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${cTemp}°C`;
}
