import React from "react";
import "./style/experiencePreview.css";

const ExperiencePreview = ({ experience }) => {
  return (
    <div className="experiencePreview">
      <div className="leftContentExperience">
        <pre className="fromExperience">{experience.from}</pre>
        {experience.from && experience.to && (
          <pre className="middleLeftExperience"> - </pre>
        )}
        <p className="toExperience">{experience.to}</p>
      </div>
      <div className="rightContentExperience">
        <p className="positionExperience">{experience.position}</p>
        <div className="groupCompany">
          <p className="companyExperience">{experience.company}</p>
          {experience.company && experience.city && (
            <pre className="middleRightExperience">, </pre>
          )}
          <p className="cityExperience">{experience.city}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePreview;
