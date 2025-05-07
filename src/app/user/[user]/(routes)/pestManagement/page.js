// export default async function PestManagement({ params }) {
//   const { user } = await params;
//   return <div>Pest Management: {user}</div>;
// }

"use client";

import Select from "react-select";
import { useState } from "react";
import Image from "next/image";
import { data } from "@/data/data";
import fertilizer from "@/public/images/fertilizer.jpeg";

const options = data.map((crop) => ({
  value: crop.crop_name,
  label: crop.crop_name,
}));
// [
//   { value: "Paddy", label: "Paddy" },
//   { value: "Sorfhum", label: "Sorfhum" },
//   { value: "Maize", label: "Maize" },
//   { value: "Cumbu", label: "Cumbu" },
//   { value: "Finger millet", label: "Finger millet" },
//   { value: "Castor", label: "Castor" },
//   { value: "Ground nut", label: "Ground nut" },
//   { value: "Mustard", label: "Mustard" },
//   { value: "Sesamum", label: "Sesamum" },
//   { value: "Sunflower", label: "Sunflower" },
//   { value: "Safflower", label: "Safflower" },
//   { value: "Pulses", label: "Pulses" },
//   { value: "Sugercane", label: "Sugercane" },
// ];

export default function PestManagement({ user }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [showPestModal, setShowPestModal] = useState(false);
  const [selectedPest, setSelectedPest] = useState(null);

  const handleCropChange = (selected) => {
    setSelectedOption(selected);
    const cropData = data.find((item) => item.crop_name === selected.value);
    setSelectedCrop(cropData);
    setShowPestModal(true);
  };

  const closePestModal = () => {
    setShowPestModal(false);
    setSelectedPest(null);
  };

  const handlePestClick = (pest) => {
    setSelectedPest(pest);
  };

  const renderList = (content) => {
    if (Array.isArray(content)) {
      return (
        <ul className="list-disc pl-4">
          {content.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      );
    }

    if (typeof content === "string" && content.startsWith("/image/")) {
      return (
        <Image
          src={content}
          alt="Pest"
          width={250}
          height={250}
          className="border-2 border-red-500s"
        ></Image>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div
      className="relative min-h-[90vh]"
      style={{
        backgroundImage: `url(${fertilizer.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center content-center">
        <p className="bg-black bg-opacity-60 p-2 rounded-md text-white text-center mt-36 w-1/2 text-4xl font-semibold">
          Select a Crop for Pest Management
        </p>
      </div>

      <div className="flex justify-center z-10 relative top-14">
        {/* <h2>Pest Management: {user}</h2> */}
        <Select
          className="w-9/12 rounded-lg "
          options={options}
          value={selectedOption}
          onChange={handleCropChange}
          isSearchable={true}
          placeholder="Select a Crop..."
          style={{
            control: (base) => ({
              ...base,
              borderRadius: "40px", // Rounded corners
              border: "2px solid grey", // Optional: Tailwind's red-400
              minHeight: "54px", // Optional: match height
            }),
            placeholder: (base) => ({
              ...base,
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
            }),
          }}
        />
      </div>
      {/* Pest Image Modal */}
      {showPestModal && selectedCrop && !selectedPest && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto py-12 px-4">
          <div className="relative bg-white p-6 rounded-lg w-full max-w-5xl mx-auto shadow-lg">
            <button
              onClick={closePestModal}
              className="absolute top-4 right-5 text-gray-600 hover:text-black text-3xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-6 text-center">
              Select a Pest for{" "}
              <span className="text-green-600">{selectedCrop.crop_name}</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {selectedCrop.pest.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex flex-col items-center"
                  onClick={() => handlePestClick(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="border rounded-lg"
                  />
                  <p className="mt-2 font-medium text-center">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* table2 */}
      {/* Pest Detail Modal */}
      {selectedPest && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white text-black p-6 rounded-lg w-11/12 max-w-7xl relative shadow-lg max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPest(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>
            <h1 className="text-xl font-semibold mb-4">
              Pest Management for:{" "}
              <span className="text-blue-600">{selectedPest.name}</span>
            </h1>
            <table className="w-full border-2 border-yellow-400">
              <thead>
                <tr>
                  <th className="border-2 border-black">Pest</th>
                  <th className="border-2 border-black">Symptoms</th>
                  <th className="border-2 border-black">Identification</th>
                  <th className="border-2 border-black">Management</th>
                  <th className="border-2 border-black">Image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-2 p-4">{selectedPest.name}</td>
                  <td className="border-2 p-4">
                    {renderList(selectedPest.symptoms)}
                  </td>
                  <td className="border-2 p-4">
                    {renderList(selectedPest.identification)}
                  </td>
                  <td className="border-2 p-4">
                    {renderList(selectedPest.management)}
                  </td>
                  <td className="border-2 p-4">
                    <Image
                      src={selectedPest.image}
                      alt="Pest"
                      width={150}
                      height={150}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
