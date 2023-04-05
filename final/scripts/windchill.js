// Temperature

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#speed');
const windChill = document.querySelector('#chill');
const humidity = document.querySelector('#humidity');
const temp2 = document.querySelector('#temp2');
const temp3 = document.querySelector('#temp3');

const url2 = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=458f4ec6f678f2377b139701bacd2ef2';
async function apiFetch() {
    try {
        const response = await fetch(url2);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;
    humidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
};

// Forecast
const url3 = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=458f4ec6f678f2377b139701bacd2ef2';

async function apiFetch2() {
    try {
        const response = await fetch(url3);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

apiFetch2();


// Windchill

function windchill() {
    if (currentTemp <= 50 && windSpeed > 3.0) {
        let w_chill = 35.74 + 0.6215 * currentTemp - 35.75 * windSpeed ** 0.16 + 0.4275 * currentTemp * windSpeed ** 0.16
        let round_chill = Math.round(w_chill * 10) / 10;
        windChill.append(`Wind Chill: ${round_chill}`);
    }
    else {
        windChill.append("N/A");
    }
};

windchill();

