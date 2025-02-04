"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import LeafletMapModal from "../LeafletMapModal";

export default function ProfileForm({ uuid }) {
  const [formData, setFormData] = useState({
    uuid: uuid,
    location: "",
    latitude: "",
    longitude: "",
    farmSize: "",
    soilType: "Alluvial Soil",
  });

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const API_KEY = "0625a2822ede4414b2ada64050b5cd05"; //geocoder api key

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    //api call to save profile

    try {
      const response = await fetch(`/api/profile?uuid=${formData.uuid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create profile");
      }

      console.log("Profile Created Successfully:", result);
      alert("Profile created successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error creating profile:", error);
    }
  };

  const fetchCoordinates = async () => {
    if (!formData.location.trim())
      return alert("Please enter a location name.");

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          formData.location
        )}&key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        setFormData((prev) => ({ ...prev, latitude: lat, longitude: lng }));
      } else {
        alert("Location not found. Please enter a valid location.");
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      alert("Failed to fetch coordinates. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleMapSelect = (lat, lng) => {
    setFormData((prev) => ({ ...prev, latitude: lat, longitude: lng }));
    setIsMapOpen(false);
  };

  return (
    <form
      className="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto my-8"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
        Create Your Profile
      </h1>

      {/* Location */}
      <div className="flex flex-col">
        <label htmlFor="location" className="text-sm text-gray-600 font-medium">
          Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 outline-none"
          placeholder="Enter your location"
        />
      </div>

      <div className="flex gap-3 mt-3">
        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-md"
          onClick={fetchCoordinates}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch Coordinates"}
        </button>

        <button
          type="button"
          className="bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-all shadow-md"
          onClick={() => setIsMapOpen(true)}
        >
          Pick on Map
        </button>

        <button
          type="button"
          className="bg-purple-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-600 transition-all shadow-md"
          onClick={() => {
            if ("geolocation" in navigator) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const { latitude, longitude } = position.coords;
                  setFormData((prev) => ({
                    ...prev,
                    latitude,
                    longitude,
                  }));
                },
                (error) => {
                  console.error("Error fetching location:", error);
                  alert(
                    "Failed to fetch location. Please enable location services."
                  );
                }
              );
            } else {
              alert("Geolocation is not supported by your browser.");
            }
          }}
        >
          Use My Location
        </button>
      </div>

      {/* Latitude */}
      <div className="flex flex-col">
        <label htmlFor="latitude" className="text-sm text-gray-600 font-medium">
          Latitude <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="latitude"
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
          className="mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 outline-none"
          placeholder="Enter latitude"
        />
      </div>

      {/* Longitude */}
      <div className="flex flex-col">
        <label
          htmlFor="longitude"
          className="text-sm text-gray-600 font-medium"
        >
          Longitude <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="longitude"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
          className="mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 outline-none"
          placeholder="Enter longitude"
        />
      </div>

      {/* Farm Size */}
      <div className="flex flex-col">
        <label htmlFor="farmSize" className="text-sm text-gray-600 font-medium">
          Farm Size (in acres) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          id="farmSize"
          name="farmSize"
          value={formData.farmSize}
          onChange={handleChange}
          required
          min={0}
          className="mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 outline-none"
          placeholder="Enter farm size in acres"
        />
      </div>

      {/* Soil Type */}
      <div className="flex flex-col">
        <label htmlFor="soilType" className="text-sm text-gray-600 font-medium">
          Soil Type <span className="text-red-500">*</span>
        </label>
        <select
          id="soilType"
          name="soilType"
          value={formData.soilType}
          onChange={handleChange}
          required
          className="mt-2 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="Alluvial Soil">Alluvial Soil</option>
          <option value="Black Soil">Black Soil</option>
          <option value="Red Soil">Red Soil</option>
          <option value="Laterite Soil">Laterite Soil</option>
          <option value="Mountain/Forest Soil">Mountain/Forest Soil</option>
          <option value="Desert Soil">Desert Soil</option>
          <option value="Saline Soil">Saline Soil</option>
          <option value="Peaty Soil">Peaty Soil</option>
          <option value="Sandy Soil">Sandy Soil</option>
          <option value="Sub-Montane Soil">Sub-Montane Soil</option>
        </select>
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-all shadow-md"
        >
          Save Profile
        </button>
      </div>

      {isMapOpen && (
        <LeafletMapModal
          onSelect={handleMapSelect}
          onClose={() => setIsMapOpen(false)}
        />
      )}
    </form>
  );
}
