import React from "react";
import "./style.css";

const Interview = () => {
  return (
    <section className="interview-section">
      <div className="personna">
        <div className="photo">
          <div className="avatar-photo">photo</div>
        </div>
        <div className="interview-description">
          <div className="avatar-details">
            <p>Name</p>
            <p>Surname</p>
          </div>
          <div className="avatar-details">
            <p>Company</p>
            <p>Experience job</p>
          </div>
        </div>
      </div>
      <div className="description-job-section">
        <div className="description-job ">Description job</div>
      </div>
    </section>
  );
};

export default Interview;
