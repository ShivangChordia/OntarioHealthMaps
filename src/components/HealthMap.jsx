import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const HealthMap = () => {
  const [geoData, setGeoData] = useState(null);
  const [phuData, setPhuData] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState("COVID-19"); // ✅ Fix: Declare selectedDisease state
  const [missingCount, setMissingCount] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/phu-data?disease`)
      .then((response) => response.json())
      .then((data) => {
        console.log(`✅ Fetched PHU Data`);
        setPhuData(data);
      })
      .catch((error) => console.error(`❌ Error fetching PHU data:`, error));
  }, [selectedDisease]); // ✅ Fix: Add selectedDisease as a dependency

  useEffect(() => {
    fetch(
      "https://services9.arcgis.com/a03W7iZ8T3s5vB7p/arcgis/rest/services/MOH_PHU_BOUNDARY/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=geojson"
    )
      .then((response) => response.json())
      .then((geojson) => {
        console.log("🗺️ GeoJSON Data Loaded:", geojson);
        setGeoData(geojson);
      })
      .catch((error) => console.error("❌ Error loading GeoJSON data:", error));
  }, []);

  useEffect(() => {
    if (geoData && phuData.length > 0) {
      console.log("✅ Processing PHU Matches...");
      let missing = 0;
      geoData.features.forEach((feature) => {
        const phuNameGeoJSON = feature.properties.NAME_ENG.trim();
        const matchingData = phuData.find(
          (data) => data.phu_name.trim() === phuNameGeoJSON
        );
        if (!matchingData) {
          console.warn(`❌ No match for PHU: ${phuNameGeoJSON}`);
          missing += 1;
        } else {
          console.log(`✅ Matched: ${matchingData.phu_name}`);
        }
      });
      setMissingCount(missing);
    }
  }, [geoData, phuData]);

  const onEachFeature = (feature, layer) => {
    if (!feature.properties || !feature.properties.NAME_ENG) {
      console.warn("⚠️ Missing NAME_ENG in feature:", feature);
      return;
    }
    const phuNameGeoJSON = feature.properties.NAME_ENG.trim();
    let matchingData = phuData.find(
      (data) => data.phu_name.trim() === phuNameGeoJSON
    );
    if (matchingData) {
      layer.bindPopup(`
        <b>${matchingData.phu_name}</b><br/>
        <b>Region:</b> ${matchingData.region || "N/A"}<br/>
        <b>Population:</b> ${matchingData.population || "N/A"}<br/>
        <b>Median Income:</b> $${matchingData.median_total_income || "N/A"}
      `);
    }
    layer.on("mouseover", function () {
      layer.setStyle({ fillColor: "yellow", fillOpacity: 0.5 });
    });
    layer.on("mouseout", function () {
      layer.setStyle({ fillColor: "#3b82f6", fillOpacity: 0.3 });
    });
  };

  return (
    <div className="flex flex-col h-screen max-h-5/6">
      {/* ✅ Disease Selection Buttons - Now Works Correctly */}
      <div className="flex justify-center bg-gray-100 p-4 space-x-4 shadow-md">
        {["COVID-19", "Influenza", "Measles", "Dengue", "Tuberculosis"].map(
          (disease) => (
            <button
              key={disease}
              onClick={() => setSelectedDisease(disease)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedDisease === disease
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {disease}
            </button>
          )
        )}
      </div>

      {/* Map Display */}
      <div className="flex flex-1 justify-center items-center p-6 max-w-4/5 max-h-5/6">
        <MapContainer
          center={[49, -85]}
          zoom={5}
          minZoom={5}
          maxBounds={[
            [41.6, -95],
            [56.9, -74],
          ]}
          maxBoundsViscosity={1.0}
          className="w-full h-full rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {geoData && (
            <GeoJSON
              data={geoData}
              onEachFeature={onEachFeature}
              style={{ color: "#3b82f6", weight: 2 }}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default HealthMap;
