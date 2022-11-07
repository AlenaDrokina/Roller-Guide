import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { useMap } from "react-leaflet/hooks";
import "leaflet/dist/leaflet.css";
// import L from "leaflet";
import { LatLngExpression } from "leaflet";
import "./TheMap.css";

const barcelona = [41.37861515964027, 2.1798093354905523];

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: require("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
// });

const TheMap = () => {
  function addMarker(e) {
    const { markers } = this.state;
    markers.push(e.latlng);
    this.setState({ markers });
  }

  return (
    <div classNAme="theMap">
      <div classNAme="Map">
        <h1>hey</h1>
        <div className="aMap">
          {/* <h1>Map</h1> */}
          <MapContainer
            center={barcelona}
            zoom={13}
            style={{ height: "500px", width: "500px" }}
            scrollWheelZoom={false}
            // maxZoom={10}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            onClick={addMarker}
          >
            <TileLayer
              url="https://api.maptiler.com/maps/outdoor/256/{z}/{x}/{y}.png?key=URvOXOC4Hq2CcuVFdBy4"
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            <Marker position={[41.39100113779489, 2.1806165884852824]}>
              <Popup>Arc de Triomf</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="adder">
          <label>
            Add a place to skate
            <input></input>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TheMap;
