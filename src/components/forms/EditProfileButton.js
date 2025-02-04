"use client";
import { useState } from "react";
import { Pencil } from "lucide-react";
import LeafletMapModal from "../LeafletMapModal";

export default function EditProfileButton({ profile }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    uuid: profile.uuid,
    location: profile.location || "",
    latitude: profile.latitude || "",
    longitude: profile.longitude || "",
    farmSize: profile.farmSize || "",
    soilType: profile.soilType || "",
  });

  const [isMapOpen, setIsMapOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const API_KEY = "0625a2822ede4414b2ada64050b5cd05";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/profile?uuid=${profile.uuid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update profile");

      alert("Profile updated successfully!");
      setOpen(false); // Close modal after submission
      window.location.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.error(error.message);
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
    <>
      {/* Edit Button */}
      <button
        className="bg-white text-green-600 px-3 py-1 rounded-lg shadow-md flex items-center"
        onClick={() => setOpen(true)}
      >
        <Pencil className="w-4 h-4 mr-2" />
        Edit
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Edit Profile Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
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
                {isMapOpen && (
                  <LeafletMapModal
                    onSelect={handleMapSelect}
                    onClose={() => setIsMapOpen(false)}
                  />
                )}

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

              <div>
                <label className="block text-sm font-medium">Latitude</label>
                <input
                  type="number"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Longitude</label>
                <input
                  type="number"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Farm Size (acres)
                </label>
                <input
                  type="number"
                  name="farmSize"
                  value={formData.farmSize}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Soil Type</label>
                <select
                  name="soilType"
                  value={formData.soilType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="Alluvial Soil">Alluvial Soil</option>
                  <option value="Black Soil">Black Soil</option>
                  <option value="Red Soil">Red Soil</option>
                  <option value="Laterite Soil">Laterite Soil</option>
                  <option value="Mountain/Forest Soil">
                    Mountain/Forest Soil
                  </option>
                  <option value="Desert Soil">Desert Soil</option>
                  <option value="Saline Soil">Saline Soil</option>
                  <option value="Peaty Soil">Peaty Soil</option>
                  <option value="Sandy Soil">Sandy Soil</option>
                  <option value="Sub-Montane Soil">Sub-Montane Soil</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
