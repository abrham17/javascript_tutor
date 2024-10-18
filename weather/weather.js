const api_Key = "aa681b1b6a52aaa30b303e1ff1ef327c";

const button = document.getElementById('search-image');

button.addEventListener('click', function() {
    const input_city = document.getElementById("input_city").value;
    get_temp(input_city);
});

function get_temp(input_city) {
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${input_city}&appid=${api_Key}&units=metric`;
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        const type_weather = data.weather[0].main;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const img = document.getElementById('weather_image');
        
        if (type_weather === 'Clouds') {
            img.setAttribute('src', 'images/cloudy.png');
        } else if (type_weather === 'Clear') {
            img.setAttribute('src', 'images/sunny.png');
        } else if (type_weather === 'Rain') {
            img.setAttribute('src', 'images/rain_image.png');
        } else if (type_weather === 'Snow') {
            img.setAttribute('src', 'images/snow.png');
        } else {
            img.setAttribute('src', 'images/sunny.png');
        }

        document.getElementById('temp').innerHTML = temp + "°C";
        document.getElementById('city').innerHTML = input_city;
        document.getElementById('humidity').innerHTML = humidity + "%";
        document.getElementById('wind').innerHTML = wind + " Km/hr";
    })
    .catch(error => {
        window.alert('Error fetching weather data:', error);
    });
}
