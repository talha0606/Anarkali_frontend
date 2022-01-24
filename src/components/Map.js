import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../style/map.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



const Map = () => {
  const { shopId } = useParams();
  console.log("In map: " + shopId);
  //   const [longitude, setlongitude] = useState("");
  const [location, setlocation] = useState({ longitude: 0.0, latitude: 0.0 });

  const handlelocation = () => {
    try {
      axios.get(`/getlocation?shopId=${shopId}`).then((res) => {
        console.log(
          `locationed Data: ${res.data[0].longitude} ${res.data[0].latitude}`
        );
        setlocation({
          longitude: parseFloat(res.data[0].longitude),
          latitude: parseFloat(res.data[0].latitude),
        });
      });
    } catch (err) {
      console.log("catch: " + err);
    }
  };

  useEffect(() => {
    handlelocation();
  }, []);

  const displaydata = () => {
    console.log("lon: " + typeof location.longitude);
    console.log("lat: " + typeof location.latitude);
    console.log("lon: " + location.longitude);
    console.log("lat: " + location.latitude);
  };
  useEffect(() => {
    displaydata();
  }, [location]);
  return (
    <div>
      <MapContainer
        center={[location.longitude, location.latitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[location.longitude, location.latitude]}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
