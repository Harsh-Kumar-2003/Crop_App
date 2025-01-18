"use client";

import { useState, useEffect } from "react";

export default function ProfileForm({ closeForm }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleGetLocation = async () => {
      try {
        if (!latitude || !longitude) {
          setError("");
          setLocation(null);
          return;
        }

        setError(null);

        const apiKey = "0625a2822ede4414b2ada64050b5cd05";
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch location.");
        }

        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setLocation(data.results[0].formatted);
        } else {
          setError("No location found for the given coordinates.");
          setLocation(null);
        }
      } catch (err) {
        setError(err.message || "An error occurred.");
        setLocation(null);
      }
    };

    handleGetLocation();
  }, [latitude, longitude]);

  const handleSaveChanges = (e) => {
    e.preventDefault();

    closeForm(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full sm:w-96 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl text-center font-bold mb-4">
          Update Your Profile
        </h2>
        <form className="w-full h-full">
          <div className="my-2">
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full rounded border p-2"
              placeholder="Enter your name"
            />
          </div>

          <div className="my-2">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full rounded border p-2"
              placeholder="Enter your email"
            />
          </div>

          <div className="my-2">
            <label className="block text-sm font-medium">Phone</label>
            <input
              type="tel"
              className="w-full rounded border p-2"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="my-2">
            <label className="block text-sm font-medium">Latitude</label>
            <input
              type="text"
              className="w-full rounded border p-2"
              value={latitude}
              placeholder="Enter latitude"
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>

          <div className="my-2">
            <label className="block text-sm font-medium">Longitude</label>
            <input
              type="text"
              className="w-full rounded border p-2"
              value={longitude}
              placeholder="Enter Longitude"
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>

          {error && <p>{error}</p>}
          {location && (
            <div style={{ marginTop: "20px" }}>
              <label>Location</label>
              <p className="w-full rounded border p-2">{location}</p>
            </div>
          )}

          <div className="my-2">
            <label className="block text-sm font-medium">
              Farm Size (in acres)
            </label>
            <input
              type="number"
              className="w-full rounded border p-2"
              placeholder="Enter farm size"
            />
          </div>

          <div className="my-2">
            <label className="block text-sm font-medium">Soil Type</label>
            <select className="w-full rounded border p-2">
              <option value="">Select soil type</option>
              <option value="sandy">Sandy</option>
              <option value="clay">Clay</option>
              <option value="silt">Silt</option>
              <option value="peat">Peat</option>
              <option value="chalk">Chalk</option>
              <option value="loam">Loam</option>
            </select>
          </div>

          <button
            onClick={handleSaveChanges}
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
