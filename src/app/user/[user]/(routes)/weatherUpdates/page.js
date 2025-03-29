import {
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  Sunrise,
  Sunset,
  Droplet,
} from "lucide-react";
import WeatherCard from "@/components/Card/weatherCardLarge";
import Image from "next/image";
import sunny from "@/public/images/sunny.png";
import rainy from "@/public/images/rainy.png";
import thunder from "@/public/images/thunder.png";
import wind from "@/public/images/wind.png";
import bg from "@/public/images/bg2.png";

export default async function WeatherUpdates({ params }) {
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
  const { latitude, longitude } = profile;
  const formattedDate = `${day}_${month}_${year}`;

  const response = await fetch(
    ` ${uri}/api/weatherData?lat=${latitude}&lon=${longitude}&date=${formattedDate}`,
    {
      method: "GET",
    }
  );
  const weather = await response.json();
  const todayWeather = await weather.today;
  const forecast = await weather.forecast;

  const getWeatherImage = () => {
    if (todayWeather.maxTemperature >= 30) return sunny;
    if (todayWeather.precipitationProbabilityMax >= 50) return rainy;
    if (todayWeather.maxWindSpeed >= 7) return wind;
    if (todayWeather.maxTemperature < 10) return thunder;
    return sunny; // Default image
  };

  return (
    <div
      className="p-6 space-y-4 "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <div className="mt-4 flex gap-2 items-center justify-center">
          <div className=" flex ">
            <div className="mr-16 ml-6 ">
              <Image src={getWeatherImage()} width={250} alt="sunny" />
            </div>
            <div className="">
              <p className="text-7xl text-black font-bold mr-10 pb-4">
                Today's Weather
              </p>
              <div className="flex items-center justify-between">
                <p className="text-5xl font-bold text-blue-700 w-full">
                  {todayWeather.maxTemperature}°C
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-4xl w-full text-gray-500">
                  min: {todayWeather.minTemperature}°C
                </p>
              </div>
            </div>
            <div className=" hidden md:flex md:flex-col pt-10 text-gray-800 font-semibold  w-52">
              <div className="flex ">
                <Sunrise size={20} className="mr-3 mb-4" />
                <p>Sunrise : {todayWeather.sunrise}</p>
              </div>
              <div className="flex  ">
                <Sunset size={20} className="mr-3 mb-4" />
                <p>Sunset : {todayWeather.sunset}</p>
              </div>
              <div className="flex  ">
                <CloudRain size={20} className="mr-3 mb-4" />
                <p>CloudRain : {todayWeather.precipitationProbabilityMax}%</p>
              </div>
              <div className="flex  ">
                <Wind size={20} className="mr-3 mb-4 " />
                <p>Wind : {todayWeather.maxWindSpeed} km/h</p>
              </div>
              <div className="flex">
                <Droplet size={20} className="mr-3 mb-4" />
                <p>Droplet : {todayWeather.maxWindGusts} km/h</p>
              </div>{" "}
            </div>
          </div>
        </div>

        {/* Today's Weather */}

        {/* <WeatherCard
          todayWeather={todayWeather}
          date={"Today's Weather"}
        /> */}
      </div>

      {/* Forecast */}
      <div className="space-y-4 bg-white rounded-lg">
        <h1 className="text-4xl font-bold pt-10 text-blue-700 pl-6">
          Forecast
        </h1>
        <div className="flex flex-wrap gap-10 p-4 rounded-lg shadow-md">
          {forecast.map((day, index) => (
            <WeatherCard
              key={index}
              todayWeather={day}
              date={new Date(day.date).toDateString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
