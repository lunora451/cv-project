import React, { Component } from "react";
import "./style/preview.css";
import ExperiencePreview from "./ExperiencePreview";
import EducationPreview from "./EducationPreview";
import avatar from "./asset/img/emptyAvatar.png";
import examplePhoto from "./asset/img/exampleAvatar.jpg";

class Preview extends Component {
  handlePhotoSrc = () => {
    const { selectedPhoto } = this.props;
    if (selectedPhoto === avatar || selectedPhoto === examplePhoto) {
      return selectedPhoto;
    } else {
      return URL.createObjectURL(selectedPhoto);
    }
  };

  render() {
    const { personalInformation, experiences, educations } = this.props;

    return (
      <div className="preview">
        <div className="headerPreview">
          <div className="namePreview">
            <p className="firstName">{personalInformation.firstName}</p>
            <p className="lastName">{personalInformation.lastName}</p>
          </div>
          <p className="titlePreview">{personalInformation.title}</p>
        </div>
        <div className="cvInformation">
          <div className="description">
            <h4 className="bottomBorder">Description</h4>
            <p className="descriptionPreview">
              {personalInformation.description}
            </p>
          </div>
          <div className="experience">
            <h4 className="bottomBorder">Experience</h4>
            {experiences.map((experience) => {
              return (
                <ExperiencePreview
                  key={experience.id}
                  experience={experience}
                />
              );
            })}
          </div>
          <div className="education">
            <h4 className="bottomBorder">Education</h4>
            {educations.map((education) => {
              return (
                <EducationPreview key={education.id} education={education} />
              );
            })}
          </div>
        </div>
        <div className="personalDetail">
          <img
            src={this.handlePhotoSrc()}
            alt="profile candidate"
            className="avatar"
          />
          <h4 className="bottomBorder">Personal Details</h4>
          <div className="address">
            <h5>Address</h5>
            <p>{personalInformation.address}</p>
          </div>
          <div className="phone ">
            <h5>Phone Number</h5>
            <p>{personalInformation.phone}</p>
          </div>
          <div className="email ">
            <h5>Email</h5>
            <p>{personalInformation.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;
