import React from "react";
import "./style/informationData.css";
import PersonalInformation from "./PersonalInformation";
import Experience from "./Experience";
import Education from "./Education";

const InformationData = ({
  handleExample,
  handleReset,
  selectedPhoto,
  handlePhotoChange,
  onChangePersonalInformation,
  experiences,
  onAddExperience,
  onChangeExperience,
  onDeleteExperience,
  educations,
  onAddEducation,
  onChangeEducation,
  onDeleteEducation,
  onPrint,
  personalInformation,
}) => {
  return (
    <div className="informationData">
      <div className="personalInformation">
        <h3>Personal Information</h3>
        <PersonalInformation
          personalInformation={personalInformation}
          selectedPhoto={selectedPhoto}
          handlePhotoChange={handlePhotoChange}
          onChangePersonalInformation={onChangePersonalInformation}
        />
      </div>
      <div className="experience">
        <h3>Experience</h3>
        {experiences.map((experience) => {
          return (
            <Experience
              key={experience.id}
              experience={experience}
              onChangeExperience={onChangeExperience}
              onDeleteExperience={onDeleteExperience}
            />
          );
        })}
        <button className="addExperience" onClick={() => onAddExperience()}>
          Add
        </button>
      </div>
      <div className="education">
        <h3>Education</h3>
        {educations.map((education) => {
          return (
            <Education
              key={education.id}
              education={education}
              onChangeEducation={onChangeEducation}
              onDeleteEducation={onDeleteEducation}
            />
          );
        })}
        <button className="addEducation" onClick={onAddEducation}>
          Add
        </button>
      </div>
      <button className="pdf" onClick={onPrint}>
        Generate PDF
      </button>
      <button className="example" onClick={handleExample}>
        Load Example
      </button>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default InformationData;
