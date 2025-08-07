import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => setShowDetails((show) => !show);

  return (
    <div aria-label="hog card" className="ui eight wide column" style={{ marginBottom: "1rem" }}>
      <div className="ui card">
        <div
          className="image"
          onClick={handleToggleDetails}
          style={{ cursor: "pointer" }}
        >
          <img src={hog.image} alt={`Photo of ${hog.name}`} />
        </div>
        <div className="content">
          <h3 className="header">{hog.name}</h3>
          {showDetails && (
            <div className="description">
              <p><strong>Specialty:</strong> {hog.specialty}</p>
              <p><strong>Weight:</strong> {hog.weight}</p>
              <p><strong>Greased:</strong> {hog.greased ? "Greased" : "Nongreased"}</p>
              <p><strong>Highest Medal:</strong> {hog["highest medal achieved"]}</p>
            </div>
          )}
        </div>
        <div className="extra content">
          <button
            className="ui red button"
            onClick={() => onHide(hog)}
          >
            Hide Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HogCard;



