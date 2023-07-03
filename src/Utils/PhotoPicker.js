import React, { useEffect } from "react";
import avatar from "../components/asset/img/emptyAvatar.png";
import examplePhoto from "../components/asset/img/exampleAvatar.jpg";
import "./photoPicker.css";

const PhotoPicker = ({ handlePhotoChange, selectedPhoto }) => {
  useEffect(() => {
    if (selectedPhoto !== avatar && selectedPhoto !== examplePhoto) {
      document.querySelector(".labelFile").textContent = selectedPhoto.name;
    } else {
      document.querySelector(".labelFile").textContent = "Profil photo";
    }
  }, [selectedPhoto]);

  return (
    <div className="photoPicker">
      <label htmlFor="photoProfil" className="labelFile">
        Profil photo
      </label>
      <input
        id="photoProfil"
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
      />
    </div>
  );
};

export default PhotoPicker;
