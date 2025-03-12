import WeatherCard from "@/components/Card/weatherCardLarge";

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

  return (
    <div className="p-6 space-y-4">

      {/* Today's Weather */}
      <WeatherCard todayWeather={todayWeather} date={"Today's Weather" } />

      {/* Forecast */}
      <div className="space-y-4 bg-white">
        <h1 className="text-4xl text-bold pt-10 text-green-800">Forecast</h1>
        <div
          className="flex flex-wrap gap-10 p-4 rounded-lg shadow-md"
        >
        {forecast.map((day, index) => (
          <WeatherCard key={index } todayWeather={day} date={new Date(day.date).toDateString()} />
          ))}
          </div>
      </div>
    </div>
  );
}