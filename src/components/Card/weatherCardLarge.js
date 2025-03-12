import { Sun, CloudRain, Wind, Thermometer, Sunrise, Sunset, Droplet } from "lucide-react";

export default function WeatherCard({ todayWeather ,date}) {
  return (
    <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white max-w-sm w-full mx-auto">
          <h2 className="text-2xl font-bold text-center">{date}</h2>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <Thermometer size={20} />
          <p>Max Temp: {todayWeather.maxTemperature}°C</p>
        </div>
        <div className="flex items-center justify-between">
          <Thermometer size={20} />
          <p>Min Temp: {todayWeather.minTemperature}°C</p>
        </div>
        <div className="flex items-center justify-between">
          <Sunrise size={20} />
          <p>Sunrise: {todayWeather.sunrise}</p>
        </div>
        <div className="flex items-center justify-between">
          <Sunset size={20} />
          <p>Sunset: {todayWeather.sunset}</p>
        </div>
        <div className="flex items-center justify-between">
          <CloudRain size={20} />
          <p>Precipitation: {todayWeather.precipitationProbabilityMax}%</p>
        </div>
        <div className="flex items-center justify-between">
          <Wind size={20} />
          <p>Max Wind Speed: {todayWeather.maxWindSpeed} km/h</p>
        </div>
        <div className="flex items-center justify-between">
          <Droplet size={20} />
          <p>Max Wind Gusts: {todayWeather.maxWindGusts} km/h</p>
        </div>
      </div>
    </div>
  );
}
