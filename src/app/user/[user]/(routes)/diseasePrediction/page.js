"use client";

import { useState } from "react";

export default function DiseasePredictionPage() {
  const [selectedCrop, setSelectedCrop] = useState("apple");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setPrediction("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !selectedCrop) {
      setError("Please select a crop and upload an image.");
      return;
    }

    setLoading(true);
    setError("");
    setPrediction("");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("crop", selectedCrop);

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setPrediction(data.result);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to fetch prediction. Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Crop Disease Prediction</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Select Crop:</label>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="apple">Apple</option>
            <option value="bell pepper">Bell Pepper</option>
            <option value="cherry">Cherry</option>
            <option value="corn">Corn</option>
            <option value="grape">Grape</option>
            <option value="peach">Peach</option>
            <option value="potato">Potato</option>
            <option value="strawberry">Strawberry</option>
            <option value="tomato">Tomato</option>
            {/* Add more crop options here */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full"
          />
        </div>

        {preview && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-1">Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="h-48 w-full object-contain border border-gray-300 rounded-md"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>

      {prediction && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg">
          <strong>Prediction:</strong> {prediction}
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-800 rounded-lg">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
}
