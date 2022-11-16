let weather = {
    apiKey: '5cc892cbe7adb1b35712c9f4843db1f3',
    fetchWeather: function (city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.card__weather-city').innerText = 'Weather in ' + name;
        document.querySelector('.card__weather-temp').innerText = Math.ceil(temp) + '°C';
        document.querySelector('.card__weather-icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector('.card__weather-descr').innerText = description;
        document.querySelector('.card__weather-humadity').innerText = 'Humadity: ' + Math.ceil(humidity) + '%';
        document.querySelector('.card__weather-wind').innerText = 'Wind speed: ' + Math.ceil(speed) + ' km/h';
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name + "')";
        document.body.classList.add('ada')
    },

    search: function () {
        this.fetchWeather(document.querySelector('.card__search-input').value)
    }
}

document.querySelector('.card__search-button').addEventListener('click', () => {
    weather.search();
})
document.querySelector('.card__search-input').addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        weather.search();
    }
}) 

weather.fetchWeather('Tokyo');
