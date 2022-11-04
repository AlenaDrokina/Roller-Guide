import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const barcelona = [41.390205, 2.154007];

const TheMap = () => {
  // const [loading, setLoading] = useState(true);
  // const [listing, setListing] = useState(null);

  return (
    <div className="leafContainer">
      <h1>Map</h1>
      {/* <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={[listing.geolocation.lat, listing.geolocation.lng]}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[listing.geolocation.lat, listing.geolocation.lng]}
        ></Marker>
      </MapContainer> */}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        placeholder={<MapPlaceholder />}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default TheMap;
