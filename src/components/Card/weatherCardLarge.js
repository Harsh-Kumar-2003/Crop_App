import {
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  Sunrise,
  Sunset,
  Droplet,
} from "lucide-react";
import sunny from "@/public/images/sunny.png";
import Image from "next/image";
import rainy from "@/public/images/rainy.png";
import thunder from "@/public/images/thunder.png";
import wind from "@/public/images/wind.png";

export default function WeatherCard({ todayWeather, date }) {
  const getWeatherImage = () => {
    // if (todayWeather.maxTemperature >= 30) return sunny;
    if (todayWeather.maxTemperature < 40 && todayWeather.maxWindSpeed > 10)
      return wind;
    if (
      todayWeather.precipitationProbabilityMax >= 40 &&
      todayWeather.maxWindGusts >= 25
    )
      return rainy;
    // if (todayWeather.maxWindSpeed >= 7) return wind;
    if (
      todayWeather.maxTemperature < 20 &&
      todayWeather.precipitationProbabilityMax >= 50
    )
      return thunder;

    return sunny; // Default image
  };

  return (
    <div className="p-6 rounded-2xl shadow-xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white max-w-sm w-full mx-auto">
      <div className="mt-4 flex flex-col gap-2">
        <div className=" flex ">
          <div className="">
            <h2 className="text-3xl font-semibold mb-2">{date}</h2>
            <div className="flex items-center justify-between">
              {/* <Thermometer size={20} /> */}
              <p className="text-3xl font-bold text-yellow-300 w-full">
                {todayWeather.maxTemperature}°C
              </p>
            </div>
            <div className="flex items-center justify-between">
              {/* <Thermometer size={20} /> */}
              <p className="font-bold w-full">
                {todayWeather.minTemperature}°C
              </p>
            </div>
          </div>
          <div className="">
            <Image src={getWeatherImage()} width={150} alt="sunny" />
          </div>
        </div>
        <hr />
        <div className="">
          <div className="flex items-center justify-between">
            <div className="flex ">
              <Sunrise size={20} className="mr-3" />
              <p>{todayWeather.sunrise}</p>
            </div>
            <div className="flex ">
              <Sunset size={20} className="mr-3" />
              <p>{todayWeather.sunset}</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex w-1/3">
              <CloudRain size={20} className="mr-3" />
              <p>{todayWeather.precipitationProbabilityMax}%</p>
            </div>
            <div className="flex w-1/3">
              <Wind size={20} className="mr-3" />
              <p>{todayWeather.maxWindSpeed} km/h</p>
            </div>
            <div className="flex w-1/3">
              <Droplet size={20} className="mr-3" />
              <p>{todayWeather.maxWindGusts} km/h</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
