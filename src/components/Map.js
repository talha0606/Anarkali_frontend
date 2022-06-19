import React, { useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import "../style/map.css";
// import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Map = () => {
  const { shopId } = useParams();
  console.log("In map: " + shopId);
  // //   const [longitude, setlongitude] = useState("");
  // const [location, setlocation] = useState({ longitude: 0.0, latitude: 0.0 });

  const [shopImage, setShopImage] = useState(avatar);
  const [shopName, setShopName] = useState("");
  const [shopEmail, setShopEmail] = useState("");
  const [shopPhoneNo, setShopPhoneNo] = useState("");
  const [shopAddress, setShopAddress] = useState("");



  const handleCopy = () => {
    navigator.clipboard.writeText(shopAddress);
  };

  const handlelocation = () => {
    try {
      // axios.get(`/shop/shop_by_id?shopId=${shopId}`).then((res) => {
      //   console.log("Shop Data: " + res.data);
      axios.get(`/shop/shop_by_id?shopId=${shopId}`).then((res) => {
        console.log("Shop Data: " + res.data[0].sName);
        setShopName(res.data[0].sName);
        setShopAddress(res.data[0].address);
        setShopEmail(res.data[0].email);
        setShopPhoneNo(res.data[0].phoneNo);
        setShopImage(res.data[0].imageUrl);

        // console.log(
        //   `locationed Data: ${res.data[0].longitude} ${res.data[0].latitude}`
        // );
        // setlocation({
        //   longitude: parseFloat(res.data[0].longitude),
        //   latitude: parseFloat(res.data[0].latitude),
        // });
      });
    } catch (err) {
      console.log("catch: " + err);
    }
  };

  useEffect(() => {
    handlelocation();
  }, []);

  // const displaydata = () => {
  //   console.log("lon: " + typeof location.longitude);
  //   console.log("lat: " + typeof location.latitude);
  //   console.log("lon: " + location.longitude);
  //   console.log("lat: " + location.latitude);
  // };
  // useEffect(() => {
  //   displaydata();
  // }, [location]);

  // const [previewimage, setpreviewimage] = useState(avatar);

  return (
    <>
      <div className="container mt-4 p-0 border border-light rounded bg-white ps-4">
        <div className="row p-2 map-row ">
          {/* form */}
          <div className="col-sm-12 col-md-5 col-lg-4  p-2 map-main-form ">
            <div className=" map-form-border rounded bg-white">
              {/* image-start */}
              <div className="shopDetails-price">
                <div className="price-range">
                  <img
                    src={shopImage}
                    className="img-round mx-auto d-block img-thumbnail avatar"
                    id="myImg"
                    alt="Shop avatar"
                  />
                </div>
              </div>

              {/* image-end */}

              {/* shop name */}
              <h1>{shopName}</h1>
              <div className="map-form-data">
                <div className="map-phone-no">
                  <div className="map-phone-no-icon">
                    <PhoneIcon />
                  </div>
                  <div className="map-phone-no-text">+92-{shopPhoneNo}</div>
                </div>
                <div className="map-email">
                  <div className="map-email-icon">
                    <EmailOutlinedIcon />
                  </div>
                  <div className="map-email-text">{shopEmail}</div>
                </div>

                <div className="map-address">
                  <div className="map-address-icon">
                    <LocationOnRoundedIcon />
                  </div>
                  <div className="map-address-text">
                    {shopAddress}
                  </div>
                </div>
              </div>
              {/* copy-btn */}
              <div className="copy-btn">
                <button
                  className="btn btn-success btn-sm ms-4 "
                  onClick={handleCopy}
                >
                  Copy Shop Address
                </button>
              </div>
            </div>
          </div>
          {/* map */}
          <div className="col-sm-12 col-md-7 col-lg-8  p-2 " style={{ height: "80vh" }}>
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              className=" map-map-border rounded"
              src="https://maps.google.com/maps?width=719&amp;height=570&amp;hl=en&amp;q=Anarkali%20Bazar%20Lahore+(Anarkali%20Bazar)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            {/* <div className="copy-btn">
          <button
            className="btn btn-primary mx-1 ms-5"
            // style={{ marginLeft: "50px", align: "center" }}
            onClick={handleCopy}
          >
            Copy Address
          </button>
        </div> */}
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <MapContainer
    //     center={[31.568849050440363, 74.31040197543261]}
    //     zoom={13}
    //     scrollWheelZoom={false}
    //   >
    //     <TileLayer
    //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     />
    //     <Marker
    //       position={[location.longitude, location.latitude]}
    //       icon={
    //         new Icon({
    //           iconUrl: markerIconPng,
    //           iconSize: [25, 41],
    //           iconAnchor: [12, 41],
    //         })
    //       }
    //     >
    //       <Popup>
    //         A pretty CSS3 popup. <br /> Easily customizable.
    //       </Popup>
    //     </Marker>
    //   </MapContainer>

    // <div className="copy-btn">
    //   <button
    //     className="btn btn-primary mx-1 ms-5"
    //     // style={{ marginLeft: "50px", align: "center" }}
    //     onClick={handleCopy}
    //   >
    //     Copy Address
    //   </button>
    // </div>
    // </div>
  );
};

export default Map;
