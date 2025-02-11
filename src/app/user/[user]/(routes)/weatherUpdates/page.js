//import { use } from "react";
import weatherCodes from "@/constants/weatherCodes";
export default async function WeatherUpdates({ params }) {
  // do not use useServer in this file
  const { user } = await params;

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

  // Get mapping for today's weather code
  const todayMapping = weatherCodes[todayWeather.weatherCode];

  return (
    // create a today weather card and pass the todayWeather object to it
    // eg<weathercard todayWeather={todayWeather} />
    // create a forecast card and pass the forecast object to it
    // eg<forecastcard forecast={forecast} />
    // create a function to get the background color based on the weather code
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Weather Updates</h1>

      {/* Today's Weather */}
      <div className={`p-4 rounded-xl shadow-lg ${getBackground("sunny")}`}>
        <h2 className="text-xl font-semibold">Today's Weather</h2>
        <p>Weather Code: {todayWeather.weatherCode}</p>
        {todayMapping && (
          <>
            <p>Description: {todayMapping.description}</p>
            <p>Details: {todayMapping.details}</p>
          </>
        )}
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
        {forecast.map((day, index) => {
          // Get mapping for each forecast day
          const dayMapping = weatherCodes[day.weatherCode];
          return (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md ${getBackground(
                "partly cloudy"
              )}`}
            >
              <h3 className="font-medium">
                {new Date(day.date).toDateString()}
              </h3>
              <p>Weather Code: {day.weatherCode}</p>
              {dayMapping && (
                <>
                  <p>Description: {dayMapping.description}</p>
                  <p>Details: {dayMapping.details}</p>
                </>
              )}
              <p>Max Temp: {day.maxTemperature}°C</p>
              <p>Min Temp: {day.minTemperature}°C</p>
              <p>Apparent Max Temp: {day.maxApparentTemperature}°C</p>
              <p>Apparent Min Temp: {day.minApparentTemperature}°C</p>
              <p>Sunrise: {day.sunrise}</p>
              <p>Sunset: {day.sunset}</p>
              <p>
                Daylight Duration: {(day.daylightDuration / 3600).toFixed(2)}{" "}
                hrs
              </p>
              <p>Max Wind Speed: {day.maxWindSpeed} km/h</p>
              <p>Max Wind Gusts: {day.maxWindGusts} km/h</p>
              <p>
                Precipitation Probability: {day.precipitationProbabilityMax}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
