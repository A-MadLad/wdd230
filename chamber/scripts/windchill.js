// let temperature = 45;
// let speed = 17;
// let chill = document.getElementById("wind_chill");


// function windchill(){
//     if(temperature <= 50 && speed > 3.0){
//         let w_chill = 35.74 + 0.6215 * temperature - 35.75 * speed ** 0.16 + 0.4275 * temperature * speed ** 0.16
//         let round_chill = Math.round(w_chill *10) / 10;
//         chill.append(`Wind Chill: ${round_chill}`);
//     }
//     else{
//         chill.append("N/A");
//     } 
// };

// windchill();

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url2 = 'https://api.openweathermap.org/data/2.5/weather?q=Alamogordo&units=imperial&appid=458f4ec6f678f2377b139701bacd2ef2';
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
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
};

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}