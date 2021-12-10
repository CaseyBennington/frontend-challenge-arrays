import React from "react";
import Button from "../components/Button";

export default function ChangeList({ arrayChangingFunctions, handleChanges }) {
  return (
    <div className="changeOptions">
      {Object.keys(arrayChangingFunctions).map((text) => (
        <Button key={text} actionBtn={true} onClick={() => handleChanges(text)}>
          {text}
        </Button>
      ))}
    </div>
  );
}
