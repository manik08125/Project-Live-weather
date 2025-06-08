async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    const apiKey = 'e536f1b8b7973e3ef03b12129448b75a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("API URL:", apiUrl);
        console.log("API Response:", data);

        const weatherDiv = document.getElementById('weatherResult');

        if (data.cod === 200) {
            weatherDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>${data.weather[0].main}</strong>: ${data.weather[0].description}</p>
                <p>🌡️ Temp: ${data.main.temp} °C</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬️ Wind: ${data.wind.speed} m/s</p>
            `;
        } else {
            weatherDiv.innerHTML = `<p>City not found. Try again.</p>`;
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Could not fetch weather data.</p>`;
    }
}

}
