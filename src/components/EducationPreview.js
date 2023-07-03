import React from "react";
import "./style/educationPreview.css";

const EducationPreview = ({ education }) => {
  return (
    <div className="educationPreview">
      <div className="leftContentEducation">
        <p className="fromEducation">{education.from} </p>
        {education.from && education.to && (
          <pre className="middleLeftEducation"> - </pre>
        )}
        <p className="toEducation">{education.to} </p>
      </div>
      <div className="rightContentEducation">
        <div>
          <p className="universityEducation">{education.university}</p>
          {education.university && education.city && (
            <pre className="middleUnivEducation">, </pre>
          )}
          <p className="cityEducation">{education.city}</p>
        </div>
        <div>
          {education.degree && (
            <pre className="degreeEducationPrefix">Degree: </pre>
          )}
          <p className="degreeEducation">{education.degree}</p>
        </div>
        <div>
          {education.subject && (
            <pre className="subjectEducationPrefix">Subject: </pre>
          )}
          <p className="subjectEducation">{education.subject}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationPreview;
