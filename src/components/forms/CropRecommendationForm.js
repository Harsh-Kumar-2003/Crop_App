"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { set } from "nprogress";

export default function CropRecommendationForm({ user }) {
  const router = useRouter();

  const [result, setResult] = useState(false);
  const [title, setTitle] = useState('🌱 Get Recommendations');
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(false);
    setTitle('🌱 Getting Recommendations...');
    // Format formData values into numbers and wrap in a 2D array
    const formattedData = {
      data: [[
        Number(formData.nitrogen),
        Number(formData.phosphorus),
        Number(formData.potassium),
        Number(formData.temperature),
        Number(formData.humidity),
        Number(formData.ph),
        Number(formData.rainfall)
      ]]
    };

    const response = await fetch("http://localhost:5000/predict_crop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("crop_result", JSON.stringify(data));
      setResult(data['result']);
    } else {
      alert("Error: " + data.message);
    }
    setTitle('🌱 Get Recommendations');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`/api/profileByUuid?uuid=${user}`);
      const profile = await response.json();

      const { latitude, longitude } = profile;

      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
      const year = today.getFullYear();
      const formattedDate = `${day}_${month}_${year}`;
      const weather = await fetch(
        `/api/weatherData?lat=${latitude}&lon=${longitude}&date=${formattedDate}`,
        {
          method: "GET",
        }
      );

      const weatherData = await weather.json();
      console.log(weatherData, "weather data");
      // You can update only some fields if you want
    };
    if (user) {
      fetchProfile();
    }
  }, [user]);

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {Object.entries(formData).map(([key, value]) => (
        <input
          key={key}
          type="number"
          step={key === "ph" ? "0.1" : "1"}
          name={key}
          placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          value={value}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      ))}
      <button
        type="submit"
        className="col-span-full mt-4 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition"
      >
        {title}
      </button>
      {result && (
        <div className="col-span-full mt-4 text-center text-green-700 font-bold">
          <p>Recommendation: {result}</p>
        </div>
      )}
    </form>
  );
}
