"use server";

import mongoose from "mongoose";
import { NextResponse } from "next/server";
import WeatherLocation from "@/models/WeatherLocation";

const uri = process.env.MONGODB_URI;
export async function GET(req) {
  await mongoose.connect(uri);
  const url = new URL(req.url);
  let lat = parseFloat(url.searchParams.get("lat")).toFixed(2);
  let lon = parseFloat(url.searchParams.get("lon")).toFixed(2);
  const date = url.searchParams.get("date");
  const id = `${lat}_${lon}_${date}`;

  const weatherData = await WeatherLocation.findOne({ _id: id });

  //if weather data is already present in the database, check if it is of today's date
  //and return the data if it is, else delete the data and fetch new data
  if (weatherData) {
    //check if the data is of today's date
    if (weatherData.date === date) {
      return NextResponse.json(weatherData);
    } else {
      await WeatherLocation.deleteOne({ _id: id });
    }
  }

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,precipitation_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant&timezone=auto`
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: 500 }
    );
  }

  const data = await response.json();

  // Format sunrise and sunset times
  const formatTime = (isoString) => {
    const dateObj = new Date(isoString);
    return dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  console.log("Here", data);
  // Create a new weather document
  const weatherDataNew = new WeatherLocation({
    _id: id,
    location: {
      lat: parseFloat(lat),
      lon: parseFloat(lon),
    },
    date: data.daily.time[0], // Today's date
    today: {
      weatherCode: parseInt(data.daily.weather_code[0]),
      maxTemperature: data.daily.temperature_2m_max[0],
      minTemperature: data.daily.temperature_2m_min[0],
      maxApparentTemperature: data.daily.apparent_temperature_max[0],
      minApparentTemperature: data.daily.apparent_temperature_min[0],
      sunrise: formatTime(data.daily.sunrise[0]),
      sunset: formatTime(data.daily.sunset[0]),
      daylightDuration: data.daily.daylight_duration[0],
      precipitationSum: data.daily.precipitation_sum[0],
      precipitationProbabilityMax: data.daily.precipitation_probability_max[0],
      maxWindSpeed: data.daily.wind_speed_10m_max[0],
      maxWindGusts: data.daily.wind_gusts_10m_max[0],
      dominantWindDirection: data.daily.wind_direction_10m_dominant[0],
    },
    // Populate the forecast array starting from index 1
    forecast: data.daily.time.slice(1).map((day, i) => ({
      date: day,
      weatherCode: parseInt(data.daily.weather_code[i + 1]),
      maxTemperature: data.daily.temperature_2m_max[i + 1],
      minTemperature: data.daily.temperature_2m_min[i + 1],
      maxApparentTemperature: data.daily.apparent_temperature_max[i + 1],
      minApparentTemperature: data.daily.apparent_temperature_min[i + 1],
      sunrise: formatTime(data.daily.sunrise[i + 1]),
      sunset: formatTime(data.daily.sunset[i + 1]),
      daylightDuration: data.daily.daylight_duration[i + 1],
      precipitationSum: data.daily.precipitation_sum[i + 1],
      precipitationProbabilityMax:
        data.daily.precipitation_probability_max[i + 1],
      maxWindSpeed: data.daily.wind_speed_10m_max[i + 1],
      maxWindGusts: data.daily.wind_gusts_10m_max[i + 1],
      dominantWindDirection: data.daily.wind_direction_10m_dominant[i + 1],
    })),
  });
  console.log("Saving weather data:", weatherDataNew);
  await weatherDataNew.save();

  return NextResponse.json(weatherData);
}
