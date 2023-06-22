const apiKey = '90d02de6c77324a0c194c9ecaae5cdd6';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const temperatureElement = document.getElementById('temperature');
const weatherDescriptionElement = document.getElementById('weather-description');
const weatherIconElement = document.getElementById('weather-icon');

function getTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const formattedTime = `${hours}:${minutes}:${seconds}`;
	timeElement.textContent = formattedTime;
}

function getDate() {
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const formattedDate = `${day}/${month}/${year}`;
	dateElement.textContent = formattedDate;
}

function getWeather() {
	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			const temperature = data.main.temp;
			const weatherDescription = data.weather[0].description;
			const weatherIcon = data.weather[0].icon;
			temperatureElement.textContent = `${temperature} °C`;
			weatherDescriptionElement.textContent = weatherDescription;
			weatherIconElement.src = `http://openweathermap.org/img/w/${weatherIcon}.png`;
		})
		.catch(error => console.log(error));
}

getTime();
getDate();
getWeather();
setInterval(getTime, 1000);

