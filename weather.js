
const apiKey = '073b04e3128af7003f5ec621c37173c3';

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const city = data.name;
            const temp = data.main.temp;
            const desc = data.weather[0].description;
            document.getElementById('city').textContent = city;
            document.getElementById('temp').textContent = temp + ' °C';
            //document.getElementById('desc').textContent = desc;
            document.getElementById('weather').style.display = 'block';
            document.getElementById('error').textContent = '';
        })
        .catch(error => {
            document.getElementById('error').textContent = error.message;
            document.getElementById('weather').style.display = 'none';
        });
});
