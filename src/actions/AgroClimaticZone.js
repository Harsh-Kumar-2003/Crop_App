// utils/getAgroClimaticZone.js
import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import fs from "fs/promises";
import path from "path";

// Assume geojsonData is loaded once and cached (or you can fetch it each time)
let geojsonData = null;

export async function loadGeojsonData() {
  if (!geojsonData) {
    const filePath = path.join(
      process.cwd(),
      "public",
      "data",
      "Agro_Climatic_Zones_of_India.geojson"
    );
    const fileData = await fs.readFile(filePath, "utf-8");
    geojsonData = JSON.parse(fileData);
  }
  return geojsonData;
}

/**
 * Given a coordinate (latitude, longitude), returns the matching agro-climatic zone feature.
 * @param {number} lat - Latitude of the point.
 * @param {number} lng - Longitude of the point.
 * @returns {object|null} - The matching GeoJSON feature, or null if not found.
 */
export async function getAgroClimaticZone(lat, lng) {
  const data = await loadGeojsonData();

  // Create a Turf.js Point (GeoJSON uses [lng, lat] order)
  const point = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [lng, lat],
    },
  };

  // Loop over each feature to find if the point falls inside it.
  for (const feature of data.features) {
    if (booleanPointInPolygon(point, feature)) {
      return feature;
    }
  }

  return null;
}
