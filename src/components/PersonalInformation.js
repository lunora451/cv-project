import React from "react";
import "./style/personalInformation.css";
import PhotoPicker from "../Utils/PhotoPicker";

const PersonalInformation = ({
  selectedPhoto,
  handlePhotoChange,
  onChangePersonalInformation,
  personalInformation,
}) => {
  return (
    <div className="personalInformation">
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        onChange={onChangePersonalInformation}
        value={personalInformation.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        onChange={onChangePersonalInformation}
        value={personalInformation.lastName}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={onChangePersonalInformation}
        value={personalInformation.title}
      />
      <PhotoPicker
        selectedPhoto={selectedPhoto}
        handlePhotoChange={handlePhotoChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        onChange={onChangePersonalInformation}
        value={personalInformation.address}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone number"
        onChange={onChangePersonalInformation}
        value={personalInformation.phone}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={onChangePersonalInformation}
        value={personalInformation.email}
      />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="3"
        placeholder="Description"
        onChange={onChangePersonalInformation}
        value={personalInformation.description}
      ></textarea>
    </div>
  );
};

export default PersonalInformation;
