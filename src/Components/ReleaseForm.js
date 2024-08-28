import React, { useState } from 'react';
import "./ReleaseForm.css"

const ReleaseForm = () => {
  const [petInfo, setPetInfo] = useState({
    name: '',
    breed: '',
    gender: '',
    color: '',
    age: '',
    images: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPetInfo({ ...petInfo, [name]: value });
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const images = [];
    for (let i = 0; i < files.length; i++) {
      images.push(URL.createObjectURL(files[i]));
    }
    setPetInfo({ ...petInfo, images });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(petInfo);
  };

  return (
    <div>
      <h1>Release Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Pet Name:</span>
          <input type="text" name="name" value={petInfo.name} onChange={handleInputChange} />
        </label>

        <label>
          <span>Breed:</span>
          <input type="text" name="breed" value={petInfo.breed} onChange={handleInputChange} />
        </label>

        <label>
          <span>Gender:</span>
          <select name="gender" value={petInfo.gender} onChange={handleInputChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label>
          <span>Color:</span>
          <input type="text" name="color" value={petInfo.color} onChange={handleInputChange} />
        </label>

        <label>
          <span>Age:</span>
          <input type="number" name="age" value={petInfo.age} onChange={handleInputChange} />
        </label>

        <label>
          <span>Upload Images:</span>
          <input type="file" multiple onChange={handleImageUpload} />
          <ul>
            {petInfo.images.map((image, index) => (
              <li key={index}>
                <img src={image} alt={`Image ${index + 1}`} />
              </li>
            ))}
          </ul>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReleaseForm;