import React, { useState, useRef } from "react";
import "./style/body.css";
import InformationData from "./InformationData";
import Preview from "./Preview";
import uniqId from "uniqid";
import avatarExample from "./asset/img/exampleAvatar.jpg";

import { useReactToPrint } from "react-to-print";
import {
  educations as educationsData,
  experiences as experiencesData,
  personalInformation as personalInformationData,
} from "../Utils/stateData";
import exampleData from "../Utils/exampleData";
import avatar from "./asset/img/emptyAvatar.png";

const Body = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(avatar);
  const [personalInformation, setPersonalInformation] = useState(
    personalInformationData
  );

  const [experiences, setExperiences] = useState(experiencesData);

  const [educations, setEducation] = useState(educationsData);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhoto(file);
    } else {
      setSelectedPhoto(avatar);
    }
  };

  const onChangePersonalInformation = (e) => {
    const { name, value } = e.target;

    setPersonalInformation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setExperiences((prevState) => {
      const newExperiences = prevState.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return newExperiences;
    });
  };

  const onAddExperience = () => {
    setExperiences((prevState) => [
      ...prevState,
      {
        id: uniqId(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
    ]);
  };

  const onDeleteExperience = (id) => {
    setExperiences((prevState) => {
      const newExperiences = prevState.filter(
        (itemExperience) => itemExperience.id !== id
      );
      return newExperiences;
    });
  };

  const onChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setEducation((prevState) => {
      const newEducation = prevState.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return newEducation;
    });
  };

  const onAddEducation = (e) => {
    setEducation((prevState) => [
      ...prevState,
      {
        id: uniqId(),
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    ]);
  };

  const onDeleteEducation = (id) => {
    setEducation((prevState) => {
      const newEducation = prevState.filter(
        (itemEducation) => itemEducation.id !== id
      );
      return newEducation;
    });
  };

  const handleReset = () => {
    setEducation(educationsData);
    setExperiences(experiencesData);
    setPersonalInformation(personalInformationData);
    setSelectedPhoto(avatar);
  };

  const handleExample = () => {
    setEducation(exampleData.education);
    setExperiences(exampleData.experience);
    setPersonalInformation(exampleData.personalInfo);
    setSelectedPhoto(avatarExample);
  };

  const componentRef = useRef();

  // throws warning because react-to-print uses findDOMNode
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  return (
    <div className="body">
      <InformationData
        handleReset={handleReset}
        selectedPhoto={selectedPhoto}
        handlePhotoChange={handlePhotoChange}
        personalInformation={personalInformation}
        onChangePersonalInformation={onChangePersonalInformation}
        experiences={experiences}
        onAddExperience={onAddExperience}
        onChangeExperience={onChangeExperience}
        onDeleteExperience={onDeleteExperience}
        educations={educations}
        onAddEducation={onAddEducation}
        onChangeEducation={onChangeEducation}
        onDeleteEducation={onDeleteEducation}
        handleExample={handleExample}
        onPrint={handlePrint}
      />
      <div>
        <Preview
          ref={componentRef}
          selectedPhoto={selectedPhoto}
          personalInformation={personalInformation}
          experiences={experiences}
          educations={educations}
        />
      </div>
    </div>
  );
};

export default Body;
