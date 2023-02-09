let temperature = 45;
let speed = 17;
let chill = document.getElementById("wind_chill");


function windchill(){
    if(temperature <= 50 && speed > 3.0){
        let w_chill = 35.74 + 0.6215 * temperature - 35.75 * speed ** 0.16 + 0.4275 * temperature * speed ** 0.16
        let round_chill = Math.round(w_chill *10) / 10;
        chill.append(`Wind Chill: ${round_chill}`);
    }
    else{
        chill.append("N/A");
    } 
};

windchill();