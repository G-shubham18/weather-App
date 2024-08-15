const apiKey = "3a4c722997bf0f897b265643dd411103";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

let searchBox = document.querySelector("input");
let btn = document.querySelector("button");
let image = document.querySelector(".weather-icon");



async function checkweather(city) {
    let response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        let data = await response.json();
        console.log(data);
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";



        if (data.weather[0].main == "Clouds") {
            image.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            image.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            image.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            image.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            image.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        searchBox.value = "";

    }

}
btn.addEventListener('click', () => {
    checkweather(searchBox.value);
})