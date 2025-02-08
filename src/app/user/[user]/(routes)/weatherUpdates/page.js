//import { use } from "react";

export default async function WeatherUpdates({ params }) {
  const { user } = await params;

  const getBackground = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "bg-gradient-to-r from-yellow-400 to-orange-500";
      case "cloudy":
        return "bg-gradient-to-r from-gray-400 to-gray-600";
      case "rainy":
        return "bg-gradient-to-r from-blue-500 to-blue-800";
      case "stormy":
        return "bg-gradient-to-r from-gray-800 to-black text-white";
      case "partly cloudy":
        return "bg-gradient-to-r from-gray-300 to-gray-500";
      default:
        return "bg-gray-200";
    }
  };

  const uri = process.env.URL;
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = today.getFullYear();

  const profiledata = await fetch(`${uri}/api/profileByUuid?uuid=${user}`, {
    method: "GET",
  });
  const profile = await profiledata.json();
  console.log(profile);
  const { latitude, longitude } = profile;
  console.log(latitude, longitude);
  const formattedDate = `${day}_${month}_${year}`;
  console.log(formattedDate);

  const response = await fetch(
    `${uri}/api/weatherData?lat=${latitude}&lon=${longitude}&date=${formattedDate}`,
    {
      method: "GET",
    }
  );
  const weather = await response.json();
  // console.log(data);
  console.log("Weather: ", weather);

  const todayWeather = await weather.today;
  const forecast = await weather.forecast;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Weather Updates</h1>

      {/* Today's Weather */}
      <div className={`p-4 rounded-xl shadow-lg ${getBackground("sunny")}`}>
        <h2 className="text-xl font-semibold">Today's Weather</h2>
        <p>Weather Code: {todayWeather.weatherCode}</p>
        <p>Max Temp: {todayWeather.maxTemperature}°C</p>
        <p>Min Temp: {todayWeather.minTemperature}°C</p>
        <p>Apparent Max Temp: {todayWeather.maxApparentTemperature}°C</p>
        <p>Apparent Min Temp: {todayWeather.minApparentTemperature}°C</p>
        <p>Sunrise: {todayWeather.sunrise}</p>
        <p>Sunset: {todayWeather.sunset}</p>
        <p>
          Daylight Duration: {(todayWeather.daylightDuration / 3600).toFixed(2)}{" "}
          hrs
        </p>
        <p>Max Wind Speed: {todayWeather.maxWindSpeed} km/h</p>
        <p>Max Wind Gusts: {todayWeather.maxWindGusts} km/h</p>
        <p>
          Precipitation Probability: {todayWeather.precipitationProbabilityMax}%
        </p>
      </div>

      {/* Forecast */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Upcoming Forecast</h2>
        {forecast.map((day, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-md ${getBackground(
              "partly cloudy"
            )}`}
          >
            <h3 className="font-medium">{new Date(day.date).toDateString()}</h3>
            <p>Weather Code: {day.weatherCode}</p>
            <p>Max Temp: {day.maxTemperature}°C</p>
            <p>Min Temp: {day.minTemperature}°C</p>
            <p>Apparent Max Temp: {day.maxApparentTemperature}°C</p>
            <p>Apparent Min Temp: {day.minApparentTemperature}°C</p>
            <p>Sunrise: {day.sunrise}</p>
            <p>Sunset: {day.sunset}</p>
            <p>
              Daylight Duration: {(day.daylightDuration / 3600).toFixed(2)} hrs
            </p>
            <p>Max Wind Speed: {day.maxWindSpeed} km/h</p>
            <p>Max Wind Gusts: {day.maxWindGusts} km/h</p>
            <p>Precipitation Probability: {day.precipitationProbabilityMax}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
