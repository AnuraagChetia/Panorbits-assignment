import React from "react";
import "./profile.css";
import { useSelector } from "react-redux";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Profile = () => {

  const user = useSelector((state) => state.user); // current logged in user state

  //styles for the map
  const mapStyles = {
    height: "400px",
    width: "35rem",
    borderRadius: "7%",
    margin: 0,
    marginTop: "30px",
  };

  //default center for the map
  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  return (
    <div className="profileContainer">

      {/* left part of the profile page */}
      <div className="left">
        <div className="myProfile">
          <img src={user.profilepicture} alt="pfp" className="dp" />
          <span className="name">{user.name}</span>
        </div>
        <ul className="personal">
          <li>
            <span className="tab">Username : </span>
            {user.username}
          </li>
          <li>
            <span className="tab">e-mail : </span> {user.email}
          </li>
          <li>
            <span className="tab">Phone :</span> {user.phone}
          </li>
          <li>
            <span className="tab">Website :</span> {user.website}
          </li>
        </ul>

        <ul className="company">
          <li>
            <span className="tab">Name :</span> {user.company.name}
          </li>
          <li>
            <span className="tab">catchphrase :</span>
            {user.company.catchPhrase}
          </li>
          <li>
            <span className="tab">bs :</span> {user.company.bs}
          </li>
        </ul>
      </div>

      {/* right part of the profile page */}
      <div className="right">
        <span className="tab">Address:</span>
        <ul className="address">
          <li>
            <span className="tab">Street : </span>
            {user.address.street}
          </li>
          <li>
            <span className="tab">Suite : </span> {user.address.suite}
          </li>
          <li>
            <span className="tab">City : </span> {user.address.city}
          </li>
          <li>
            <span className="tab">Zipcode : </span> {user.address.zipcode}
          </li>
          <div className="map">
            {/* private api key which i will disable later. better to use .env file */}
            <LoadScript googleMapsApiKey="AIzaSyBQqNFpfoWM_GvFvGaLOfs-8IzeUEoiimg"> 
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
            </LoadScript>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
