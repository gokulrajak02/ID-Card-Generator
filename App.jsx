import React, { useState } from "react";
import "./App.css";
import UserPreview from "./UserPreview";

function App() {
  const [formData, setFormData] = useState({
    companyName: "",
    slogan: "",
    name: "",
    position: "",
    mobile: "",
    email: "",
    website: "",
    address: "",
    photo: null,
    photoURL: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        photo: file,
        photoURL: URL.createObjectURL(file),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setFormData({
      companyName: "",
      slogan: "",
      name: "",
      position: "",
      mobile: "",
      email: "",
      website: "",
      address: "",
      photo: null,
      photoURL: null,
    });
  };

  return (
    <div className="app-container">
      <h1>Company Details Form</h1>
      <form className="form-container">
        <label>Company Name</label>
        <input name="companyName" value={formData.companyName} onChange={handleChange} />

        <label>Company Slogan</label>
        <input name="slogan" value={formData.slogan} onChange={handleChange} />

        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} />

        <label>Position</label>
        <input name="position" value={formData.position} onChange={handleChange} />

        <label>Mobile</label>
        <input name="mobile" value={formData.mobile} onChange={handleChange} />

        <label>Email</label>
        <input name="email" value={formData.email} onChange={handleChange} />

        <label>Website</label>
        <input name="website" value={formData.website} onChange={handleChange} />

        <label>Address</label>
        <input name="address" value={formData.address} onChange={handleChange} />

        <label>Photo</label>
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />

        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      <UserPreview data={formData} />
    </div>
  );
}

export default App;