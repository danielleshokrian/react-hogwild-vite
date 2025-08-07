import React, { useState } from "react";
import porkersData from "../porkers_data";
import HogList from "./HogList";
import HogForm from "./HogForm";
import Filter from "./Filter";

function App() {
  const [hogs, setHogs] = useState(porkersData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("none");
  const [hiddenHogIds, setHiddenHogIds] = useState([]);

  // Filter hogs by greased and hidden status
  let displayedHogs = hogs.filter(
    (hog) => (!greasedOnly || hog.greased) && !hiddenHogIds.includes(hog.id)
  );

  // Sort hogs
  if (sortBy === "name") {
    displayedHogs = [...displayedHogs].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortBy === "weight") {
    displayedHogs = [...displayedHogs].sort((a, b) => a.weight - b.weight);
  }

  const handleHideHog = (hog) => {
    setHiddenHogIds((ids) => [...ids, hog.id]);
  };

  const handleAddHog = (newHog) => {
    // Assign a unique ID
    const newHogWithId = {
      ...newHog,
      id: Date.now() + Math.random(), // simple unique ID
    };
    setHogs((prevHogs) => [...prevHogs, newHogWithId]);
  };

  return (
    <div className="ui container">
      <h1>Hog Wild!</h1>
      <Filter
        greasedOnly={greasedOnly}
        onGreasedChange={setGreasedOnly}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <HogForm onAddHog={handleAddHog} />
      <HogList hogs={displayedHogs} onHide={handleHideHog} />
    </div>
  );
}

export default App;



