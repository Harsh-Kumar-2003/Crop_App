import { Schema, model, models } from "mongoose";

const WeatherLocationSchema = new Schema({
  _id: String, // Format: "lat_long_date" (e.g., "28.61_77.23_2025-02-05")
  location: {
    lat: Number, // Truncated to 2 decimal places
    lon: Number, // Truncated to 2 decimal places
  },
  date: String, // Format: YYYY-MM-DD
  today: {
    weatherCode: Number, // Weather code (from API)
    maxTemperature: Number, // temperature_2m_max
    minTemperature: Number, // temperature_2m_min
    maxApparentTemperature: Number, // apparent_temperature_max
    minApparentTemperature: Number, // apparent_temperature_min
    sunrise: String, // "HH:MM AM/PM" (convert from ISO 8601)
    sunset: String, // "HH:MM AM/PM" (convert from ISO 8601)
    daylightDuration: Number, // In seconds (from API)
    precipitationSum: Number, // mm (precipitation_sum)
    precipitationProbabilityMax: Number, // % (precipitation_probability_max)
    maxWindSpeed: Number, // km/h (wind_speed_10m_max)
    maxWindGusts: Number, // km/h (wind_gusts_10m_max)
    dominantWindDirection: Number, // Degrees (wind_direction_10m_dominant)
  },
  forecast: [
    {
      date: String, // Format: YYYY-MM-DD
      weatherCode: Number, // Weather code (from API)
      maxTemperature: Number, // temperature_2m_max
      minTemperature: Number, // temperature_2m_min
      maxApparentTemperature: Number, // apparent_temperature_max
      minApparentTemperature: Number, // apparent_temperature_min
      sunrise: String, // "HH:MM AM/PM" (convert from ISO 8601)
      sunset: String, // "HH:MM AM/PM" (convert from ISO 8601)
      daylightDuration: Number, // In seconds (from API)
      precipitationSum: Number, // mm (precipitation_sum)
      precipitationProbabilityMax: Number, // % (precipitation_probability_max)
      maxWindSpeed: Number, // km/h (wind_speed_10m_max)
      maxWindGusts: Number, // km/h (wind_gusts_10m_max)
      dominantWindDirection: Number, // Degrees (wind_direction_10m_dominant)
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const WeatherLocation =
  models?.WeatherLocation || model("WeatherLocation", WeatherLocationSchema);

export default WeatherLocation;
