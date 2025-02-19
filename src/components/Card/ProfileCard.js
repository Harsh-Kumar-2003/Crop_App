import { MapPin, Globe, Layers, Droplet, UserRound } from "lucide-react";
import EditProfileButton from "../forms/EditProfileButton";
import EditNameButton from "../forms/UpdateName";

export default async function ProfileCard({ profile }) {
  const {
    uuid,
    latitude,
    longitude,
    location,
    farmSize,
    soilType,
    agroClimaticZone,
    updatedAt,
  } = profile;

  let userName;

  try {
    const uri = process.env.URL;
    const response = await fetch(`${uri}/api/nameByUuid?uuid=${uuid}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    userName = await response.json();
    console.log("User Name:", userName);
  } catch (error) {
    console.error("Failed to fetch user:", error.message);
  }

  return (
    <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 p-6 rounded-2xl shadow-lg max-w-4xl mx-auto my-8">
      <h1 className="text-white text-2xl font-bold mb-6">Farmer Profile</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <UserRound className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-600">Name</h2>
            <p className="text-lg font-semibold text-gray-900">{userName}</p>
          </div>
          {/* Edit Name Button */}
          <EditNameButton
            className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded-full shadow-md flex items-center justify-center"
            uuid={uuid}
          />
        </div>

        {/* Location */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <MapPin className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-600">Location</h2>
            <p className="text-lg font-semibold text-gray-900">
              {location || "N/A"}
            </p>
          </div>
        </div>

        {/* Latitude */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Globe className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-600">Latitude</h2>
            <p className="text-lg font-semibold text-gray-900">
              {latitude && !isNaN(latitude)
                ? Number(latitude).toFixed(3)
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Longitude */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Globe className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-600">Longitude</h2>
            <p className="text-lg font-semibold text-gray-900">
              {longitude && !isNaN(longitude)
                ? Number(longitude).toFixed(3)
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Farm Size */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Layers className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-600">Farm Size</h2>
            <p className="text-lg font-semibold text-gray-900">
              {farmSize} acres
            </p>
          </div>
        </div>

        {/* Soil Type */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Droplet className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-600">Soil Type</h2>
            <p className="text-lg font-semibold text-gray-900">
              {soilType.charAt(0).toUpperCase() + soilType.slice(1)}
            </p>
          </div>
        </div>
        {/* Agro-Climatic Zone */}
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
          <Layers className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-600">Agro-Climatic Zones</h2>
            <p className="text-lg font-semibold text-gray-900">
              {agroClimaticZone}
            </p>
          </div>
        </div>
        <div className="flex">
          <div>{updatedAt}</div>
          {/* Edit Profile Button */}
          <div className="ml-auto">
            <EditProfileButton profile={profile} />
          </div>
        </div>
      </div>
    </div>
  );
}
