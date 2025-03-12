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
    <div className="bg-white bg-opacity-80 p-6 rounded-2xl shadow-xl my-8 max-w-5xl mx-auto">
      <h1 className="text-green-700 text-3xl font-bold text-center mb-6">Farmer Profile</h1>
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Side - User Info */}
      <div className="p-6 rounded-lg shadow-md border border-gray-200 bg-white">
        <div className="flex flex-col items-center">
          {/* User Icon */}
          <UserRound className="text-green-600 h-24 w-24 mb-4" />
        
          {/* User Name */}
          <p className="text-2xl font-semibold text-gray-900 text-center">{userName}</p>
        
          {/* Edit Name Button */}
          <EditNameButton className="mt-2" uuid={uuid} />
        </div>

        {/* Location */}
        <div className="mt-6 flex justify-center">
          <div className="bg-green-600 text-white p-3 rounded-lg shadow-lg flex items-center w-64">
            <MapPin className="w-6 h-6 mr-3" />
            <div>
              <h2 className="text-sm">Location</h2>
              <p className="text-lg font-semibold">{location || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Edit Profile Button & Last Updated */}
        <div className="mt-6 flex flex-col items-center">
          <EditProfileButton profile={profile} />
          <p className="text-sm text-gray-500 mt-4">{updatedAt}</p>
        </div>
      </div>

      {/* Right Side - Profile Details */}
      <div className="p-6 rounded-lg shadow-md border border-gray-200 bg-white">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Basic Information</h1>
      
        {/* Latitude */}
        <div className="flex items-center border rounded-lg p-4 shadow-sm bg-gray-50 mb-4">
          <Globe className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-500">Latitude</h2>
            <p className="text-lg font-semibold text-gray-900">{latitude && !isNaN(latitude)
                  ? Number(latitude).toFixed(3)
                  : "N/A"}</p>
          </div>
        </div>

        {/* Longitude */}
        <div className="flex items-center border rounded-lg p-4 shadow-sm bg-gray-50 mb-4">
          <Globe className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-500">Longitude</h2>
            <p className="text-lg font-semibold text-gray-900">{longitude && !isNaN(longitude)
                  ? Number(longitude).toFixed(3)
                  : "N/A"}</p>
          </div>
        </div>

        {/* Farm Size */}
        <div className="flex items-center border rounded-lg p-4 shadow-sm bg-gray-50 mb-4">
          <Layers className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-500">Farm Size</h2>
            <p className="text-lg font-semibold text-gray-900">{farmSize} acres</p>
          </div>
        </div>

        {/* Soil Type */}
        <div className="flex items-center border rounded-lg p-4 shadow-sm bg-gray-50 mb-4">
          <Droplet className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-500">Soil Type</h2>
            <p className="text-lg font-semibold text-gray-900">
              {soilType.charAt(0).toUpperCase() + soilType.slice(1)}
            </p>
          </div>
        </div>

        {/* Agro-Climatic Zone */}
        <div className="flex items-center border rounded-lg p-4 shadow-sm bg-gray-50">
          <Layers className="text-green-600 w-6 h-6 mr-4" />
          <div>
            <h2 className="text-sm text-gray-500">Agro-Climatic Zone</h2>
            <p className="text-lg font-semibold text-gray-900">{agroClimaticZone}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
