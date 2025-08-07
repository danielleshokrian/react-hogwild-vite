import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [greased, setGreased] = useState(false);
  const [image, setImage] = useState("");
  const [medal, setMedal] = useState("bronze");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !weight) return; 

    const newHog = {
      name,
      weight: Number(weight),
      specialty,
      greased,
      image: image || "https://via.placeholder.com/150",
      "highest medal achieved": medal,
    };

    onAddHog(newHog);

    // Reset form fields
    setName("");
    setWeight("");
    setSpecialty("");
    setGreased(false);
    setImage("");
    setMedal("bronze");
  };

  return (
    <form className="ui form" onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <div className="field">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>

      <div className="field">
        <label htmlFor="specialty">Specialty:</label>
        <input
          id="specialty"
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="greased">Greased?</label>
        <input
          id="greased"
          type="checkbox"
          checked={greased}
          onChange={(e) => setGreased(e.target.checked)}
        />
      </div>

      <div className="field">
        <label htmlFor="image">Image URL:</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="medal">Highest Medal Achieved:</label>
        <select
          id="medal"
          value={medal}
          onChange={(e) => setMedal(e.target.value)}
        >
          <option value="bronze">Bronze</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="platinum">Platinum</option>
        </select>
      </div>

      <button className="ui primary button" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;

