//Creates an HTML representation of a weather forecast for a specific day
export const WeatherHTML = (weather) => {
    const date = new Date((weather.dt - 18000) * 1000).toISOString().split("T")[0]
    const precipitationChance = Math.round(weather.pop * 100)
    return `
    <div class="weatherCard">
    <p><strong>Weather for ${date}</strong></p>
        <ul class="weatherListing">
            <li>High: ${Math.round(weather.main.temp_max)} °F</li>
            <li>Low: ${Math.round(weather.main.temp_min)} °F</li>
            <li>Chance of PrecipiTaTion: ${precipitationChance}%</li>
        </ul>
    </div>
    `
}
