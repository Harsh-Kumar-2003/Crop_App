"use client";
import { useState } from "react";
import { Pencil } from "lucide-react";

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
    } catch (error) {
      console.error(error.message);
    }
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
