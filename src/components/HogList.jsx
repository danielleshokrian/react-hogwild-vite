import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs, onHide }) {
  return (
    <div className="ui cards">
      {hogs.map((hog) => (
        <HogCard key={hog.id} hog={hog} onHide={onHide} />
      ))}
    </div>
  );
}

export default HogList;

