import React from "react";
import "./style/experience.css";

const Experience = ({ experience, onChangeExperience, onDeleteExperience }) => {
  return (
    <div className="experienceComponent">
      <input
        onChange={(e) => onChangeExperience(e, experience.id)}
        type="text"
        placeholder="Position"
        name="position"
        value={experience.position}
      />
      <input
        onChange={(e) => onChangeExperience(e, experience.id)}
        type="text"
        placeholder="Company"
        name="company"
        value={experience.company}
      />
      <input
        onChange={(e) => onChangeExperience(e, experience.id)}
        type="text"
        placeholder="City"
        name="city"
        value={experience.city}
      />
      <input
        onChange={(e) => onChangeExperience(e, experience.id)}
        type="text"
        placeholder="From"
        name="from"
        value={experience.from}
      />
      <input
        onChange={(e) => onChangeExperience(e, experience.id)}
        type="text"
        placeholder="To"
        name="to"
        value={experience.to}
      />
      <button
        className="deleteExperience"
        onClick={() => onDeleteExperience(experience.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Experience;
