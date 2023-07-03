import React from "react";
import "./style/education.css";

const Education = ({ education, onChangeEducation, onDeleteEducation }) => {
  return (
    <div className="educationComponent">
      <input
        onChange={(e) => onChangeEducation(e, education.id)}
        type="text"
        placeholder="University name"
        name="university"
        value={education.university}
      />
      <input
        onChange={(e) => onChangeEducation(e, education.id)}
        type="text"
        placeholder="City"
        name="city"
        value={education.city}
      />
      <input
        onChange={(e) => onChangeEducation(e, education.id)}
        type="text"
        placeholder="Degree"
        name="degree"
        value={education.degree}
      />
      <input
        onChange={(e) => onChangeEducation(e, education.id)}
        type="text"
        placeholder="Subject"
        name="subject"
        value={education.subject}
      />
      <input
        onChange={(e) => onChangeEducation(e, education.id)}
        type="text"
        placeholder="From"
        name="from"
        value={education.from}
      />
      <input
        onChange={(e) => onChangeEducation(e, education.id)}
        type="text"
        placeholder="To"
        name="to"
        value={education.to}
      />
      <button
        className="deleteEducation"
        onClick={() => onDeleteEducation(education.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Education;
