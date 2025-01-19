export default function WeatherUpdates({ params }) {
  const { user } = params;
  const weather = {
    temperature: 28,
    condition: "Sunny",
    humidity: 65,
    windSpeed: 10,
  };

  return (
    <div className="weather-container pl-8">
      <h1 className="greeting">Hello, {user}! 🌤️</h1>
      <div className="weather-card">
        <h2>{weather.condition}</h2>
        <p>🌡️ Temperature: {weather.temperature}°C</p>
        <p>💧 Humidity: {weather.humidity}%</p>
        <p>🌬️ Wind Speed: {weather.windSpeed} km/h</p>
      </div>
    </div>
  );
}
