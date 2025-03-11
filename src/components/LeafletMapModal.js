"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Define the red Google Maps-style marker
const redMarkerIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [32, 32], // Adjust size to match Google Maps style
  iconAnchor: [16, 32], // Anchor at the bottom center
  popupAnchor: [0, -32], // Popup position relative to icon
});

export default function LeafletMapModal({ onSelect, onClose }) {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [selectedCoords, setSelectedCoords] = useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([20, 77], 4); // Default view (India)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapRef.current);

      mapRef.current.on("click", function (e) {
        const { lat, lng } = e.latlng;

        // Remove the previous marker if it exists and set a new one
        if (markerRef.current) {
          markerRef.current.setLatLng([lat, lng]);
        } else {
          markerRef.current = L.marker([lat, lng], {
            icon: redMarkerIcon,
          }).addTo(mapRef.current);
        }

        // Update state but do NOT close modal
        setSelectedCoords({ lat, lng });
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const handleConfirm = () => {
    if (selectedCoords.lat && selectedCoords.lng) {
      onSelect(selectedCoords.lat, selectedCoords.lng);
    }
    onClose(); // Close the modal when the user clicks "Confirm"
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div id="map" className="w-[500px] h-[400px]"></div>

        {/* Display selected coordinates */}
        {selectedCoords.lat && selectedCoords.lng && (
          <p className="text-center mt-3 text-gray-700">
            Selected:{" "}
            <strong>
              {selectedCoords.lat.toFixed(6)}, {selectedCoords.lng.toFixed(6)}
            </strong>
          </p>
        )}

        <div className="flex justify-between mt-4">
          <button
            onClick={handleConfirm}
            className="p-2 bg-green-500 text-white rounded-lg"
          >
            Confirm Location
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-red-500 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
