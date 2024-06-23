import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      {/* {details.responsibilities2.map((item) => (
      <div className="work-duration">{item}</div>
          // <li key={item}>{item}</li>
        ))} */}

      <div className="work-duration">{details.stack}</div>

      <ul>
        {details.responsibilities.map((item) => (
      // <div className="work-duration">{item}</div>
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
