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
  const [farms, setFarms] = useState([]);
  const [loading, setLoading] = useState(false);
  const parsedData = [];

  const parseData = () => {
    for (let farm in farms) {
      const data = JSON.parse(farms[farm].location);
      parsedData.push(data);
    }
  };

  // create Request
  const getLocationsUrl = "http://127.0.0.1:8000/api/v1/getLocations/";
  const getLocations = () => {
    axios({
      method: "GET",
      url: getLocationsUrl,
      headers: { Authorization: token },
    }).then((response) => {
      setFarms(response.data.farms);
      parseData();
    });
  };

  useEffect(() => {
    getLocations();
  }, []);

  const displayMap = () => {
    return (
      <MapContainer
        className="mapBox"
        center={[33.8938, 35.5018]}
        zoom={9}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {parsedData.map((farm, index) => {
          return (
            <Marker
              key={parseData[index]}
              position={[farm.latitude, farm.longitude]}
              icon={
                new icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup key={parseData[index]}>{farms[index].name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    );
  };

  return (
    <>
      {!loading ? (
        displayMap()
      ) : (
        <h4>Fetching data and setting markers, please wait</h4>
      )}
    </>
  );
}
