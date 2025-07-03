import React from "react";
import "./App.css";

const UserPreview = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{data.companyName || "Company Name"}</h2>
        <p>{data.slogan || "Company Slogan"}</p>
      </div>

      <div className="card-body">
        {data.photoURL && <img src={data.photoURL} alt="Profile" className="profile-pic" />}
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Position:</strong> {data.position}</p>
        <p><strong>Mobile:</strong> {data.mobile}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Address:</strong> {data.address}</p>
      </div>

      <div className="card-footer">
        <a href={data.website} target="_blank" rel="noreferrer">
          {data.website}
        </a>
      </div>
    </div>
  );
};

export default UserPreview;