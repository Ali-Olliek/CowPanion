import axios from "axios";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

// Styles
import "../../pages/Main/MidSection/MidSecStyles.css";

export default function LeafletMap() {
  // States and Variables
  const token = localStorage.getItem("token");
  const [farms, setFarms] = useState();
  const [locations, setLocations] = useState();
  const [loading, setLoading] = useState(true);
  const parsedData = [];

  const parseData = (data) => {
    let new_data = data.map((farm_data) => {
      return JSON.parse(farm_data.location);
    });
    setLoading(false);
    return new_data;
  };

  // create Request
  const getLocationsUrl = "http://127.0.0.1:8000/api/v1/getLocations/";
  const getLocations = () => {
    axios({
      method: "GET",
      url: getLocationsUrl,
      headers: { Authorization: token },
    }).then((response) => {
      const data = parseData(response.data.farms);
      setFarms(response.data.farms);
      setLocations(data);
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

  const displayMap = () => {
    return (
      <>
        <MapContainer
          className="mapBox"
          center={[33.8938, 35.5018]}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer
            className="tile"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((farm, index) => {
            return (
              <Marker
                key={locations[index]}
                position={[farm.latitude, farm.longitude]}
                icon={
                  new icon({
                    iconUrl: markerIconPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup key={farms[index]}>{farms[index].name}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </>
    );
  };

  return (
    <>
      {farms ? (
        displayMap()
      ) : (
        <h4>Fetching data and setting markers, please wait</h4>
      )}
    </>
  );
}
