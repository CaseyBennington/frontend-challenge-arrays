import React from "react";

export default function Results({ outputArray, runTime }) {
  return (
    <div className="results">
      <p>Output array Length: {outputArray.length}</p>
      <p>Transformation took {runTime.toFixed(2)} milliseconds.</p>
    </div>
  );
}
