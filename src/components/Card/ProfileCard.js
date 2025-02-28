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
    <div className="bg-transparent p-4 rounded-2xl shadow-lg  my-8">
      <h1 className="text-black text-2xl font-bold mb-6">Farmer Profile</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="left_part border-r-2 w-3/4 border-black">
          {/* Name */}
          <div className="p-4 rounded-lg shadow-md items-center">
            <UserRound className=" text-green-600 h-24 w-full flex items-center justify-center" />
            <div>
              {/* <h2 className="text-sm text-gray-600">Name</h2> */}
              <p className="text-xl font-semibold text-gray-900 text-center">
                {userName}
              </p>
            </div>
            {/* Edit Name Button */}
            <div>
              <EditNameButton className="" uuid={uuid} />
            </div>
          </div>

          {/* Location */}
          <div className="w-full flex text-center justify-center">
            <div className="bg-stone-500  mt-6  p-2 pl-14 rounded-lg shadow-md w-64 flex items-center">
              <MapPin className="text-white w-6 h-6 mr-4" />
              <div>
                <h2 className="text-sm  text-white">Location</h2>
                <p className="text-lg font-semibold text-white">
                  {location || "N/A"}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex text-center justify-center">
            <div className="flex-col mt-6">
              {/* Edit Profile Button */}
              <div className=" ">
                <EditProfileButton profile={profile} className="" />
              </div>
              <div className="text-center mt-8">{updatedAt}</div>
            </div>
          </div>
        </div>

        <div className="right_part text-white relative right-36">
          <h1 className="text-2xl font-semibold text-black">
            Basic Informations
          </h1>
          {/* Latitude */}
          <div className="border-2 border-stone-500 mt-4 p-4 rounded-lg shadow-[inset_20px_20px_20px_rgba(0,0,0,0.4),25px_35px_20px_rgba(0,0,0,0.09),25px_30px_30px_rgba(0,0,0,0.2),inset_-20px_-20px_25px_rgba(255,255,255,0.9)] flex items-center">
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
          <div className="border-2 border-stone-500 mt-4 p-4 rounded-lg shadow-[inset_20px_20px_20px_rgba(0,0,0,0.4),25px_35px_20px_rgba(0,0,0,0.09),25px_30px_30px_rgba(0,0,0,0.2),inset_-20px_-20px_25px_rgba(255,255,255,0.9)] flex items-center">
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
          <div className="border-2 border-stone-500 mt-4 p-4 rounded-lg shadow-[inset_20px_20px_20px_rgba(0,0,0,0.4),25px_35px_20px_rgba(0,0,0,0.09),25px_30px_30px_rgba(0,0,0,0.2),inset_-20px_-20px_25px_rgba(255,255,255,0.9)] flex items-center">
            <Layers className="text-green-600 w-6 h-6 mr-4" />
            <div>
              <h2 className="text-sm text-gray-600">Farm Size</h2>
              <p className="text-lg font-semibold text-gray-900">
                {farmSize} acres
              </p>
            </div>
          </div>

          {/* Soil Type */}
          <div className="border-2 border-stone-500 mt-4 p-4 rounded-lg shadow-[inset_20px_20px_20px_rgba(0,0,0,0.4),25px_35px_20px_rgba(0,0,0,0.09),25px_30px_30px_rgba(0,0,0,0.2),inset_-20px_-20px_25px_rgba(255,255,255,0.9)] flex items-center">
            <Droplet className="text-green-600 w-6 h-6 mr-4" />
            <div>
              <h2 className="text-sm text-gray-600">Soil Type</h2>
              <p className="text-lg font-semibold text-gray-900">
                {soilType.charAt(0).toUpperCase() + soilType.slice(1)}
              </p>
            </div>
          </div>

          {/* Agro-Climatic Zone */}
          <div className="border-2 border-stone-500 mt-4 p-4 mb-8 rounded-lg shadow-[inset_20px_20px_20px_rgba(0,0,0,0.4),25px_35px_20px_rgba(0,0,0,0.09),25px_30px_30px_rgba(0,0,0,0.2),inset_-20px_-20px_25px_rgba(255,255,255,0.9)] flex items-center">
            <Layers className="text-green-600 w-6 h-6 mr-4" />
            <div>
              <h2 className="text-sm text-gray-600">Agro-Climatic Zones</h2>
              <p className="text-lg font-semibold text-gray-900">
                {agroClimaticZone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
