import React from "react";

function Filter({ greasedOnly, onGreasedChange, sortBy, onSortChange }) {
  return (
    <div className="ui form" style={{ marginBottom: "20px" }}>
      <div className="inline fields">
        <div className="field">
          <input
            id="greased"
            type="checkbox"
            checked={greasedOnly}
            onChange={(e) => onGreasedChange(e.target.checked)}
          />
          <label htmlFor="greased">Greased Pigs Only?</label>
        </div>
        <div className="field">
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="none">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
