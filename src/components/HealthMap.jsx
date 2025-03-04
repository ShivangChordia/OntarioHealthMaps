import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IoFilter, IoClose } from "react-icons/io5"; // Import icons

const HealthMap = () => {
  const [geoData, setGeoData] = useState(null);
  const [phuData, setPhuData] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState("COVID-19");
  const [missingCount, setMissingCount] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/phu-data`)
      .then((response) => response.json())
      .then((data) => {
        console.log("✅ Fetched PHU Data");
        setPhuData(data);
      })
      .catch((error) => console.error("❌ Error fetching PHU data:", error));
  }, [selectedDisease]);

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
  const resetFilters = () => {
    setSelectedAge("");
    setSelectedYear("");
    setSelectedGender("");
  };

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/api/cancer-data?year=${selectedYear}&age=${selectedAge}&gender=${selectedGender}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("✅ Fetched Cancer Data:", data);
        setPhuData(data); // Update map with new filtered cancer data
      })
      .catch((error) => console.error("❌ Error fetching cancer data:", error));
  }, [selectedYear, selectedAge, selectedGender]);

  return (
    <div className="flex flex-col h-screen">
      {/* ✅ Disease Selection + Filter Button */}
      <div className="bg-gray-100 shadow-md p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          {["Cancer", "Chronic", "Smoking", "Reproductive Health"].map(
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
        {/* ✅ Filter Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center space-x-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          <IoFilter className="text-lg" />
          <span>Filters</span>
        </button>
      </div>

      {/* ✅ Sidebar Filter Panel */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform ${
          isFilterOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filter Data</h2>
            <button onClick={() => setIsFilterOpen(false)}>
              <IoClose className="text-2xl" />
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Customize the data view with these filters.
          </p>

          {/* 🔹 Age Filter */}
          <label className="block font-medium mb-1">Age Range</label>
          <select
            className="w-full p-2 border rounded-lg mb-4"
            value={selectedAge}
            onChange={(e) => setSelectedAge(e.target.value)}
          >
            <option value="">Select Age</option>
            <option value="all">All Ages</option>
            <option value="0-14">0-14</option>
            <option value="15-29">15-29</option>
            <option value="30-49">30-49</option>
            <option value="50-64">50-64</option>
            <option value="65-79">65-79</option>
            <option value="80+">80+</option>
          </select>

          {/* 🔹 Year Filter */}
          <label className="block font-medium mb-1">Year</label>
          <select
            className="w-full p-2 border rounded-lg mb-4"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select Year</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>

          {/* 🔹 Gender Filter */}
          <label className="block font-medium mb-2">Gender</label>
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setSelectedGender("Both")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedGender === "Both"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Both
            </button>
            <button
              onClick={() => setSelectedGender("Male")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedGender === "Male"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Male
            </button>
            <button
              onClick={() => setSelectedGender("Female")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedGender === "Female"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Female
            </button>
          </div>

          {/* ✅ Apply & Reset Buttons */}
          <div className="flex space-x-4">
            <button
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
              onClick={() => setIsFilterOpen(false)}
            >
              Apply Filters
            </button>
            <button
              className="w-full bg-gray-200 px-4 py-2 rounded-lg font-semibold"
              onClick={resetFilters}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Map Display */}
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
