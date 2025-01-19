import { Schema, model, models } from "mongoose";

const WeatherLocationSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lon: {
    type: Number,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  timezone_offset: {
    type: Number,
    required: true,
  },
});

const WeatherLocation =
  models?.WeatherLocation || model("WeatherLocation", WeatherLocationSchema);

export default WeatherLocation;
