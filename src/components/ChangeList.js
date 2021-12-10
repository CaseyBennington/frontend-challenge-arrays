import React from "react";
import ListItem from "../components/ListItem";

export default function ChangeList({ changes }) {
  return (
    <div className="changeList">
      <ol>
        {changes.length ? (
          changes.map((change, idx) => (
            <ListItem key={`${change}${idx}`} change={change} />
          ))
        ) : (
          <div>No filters selected</div>
        )}
      </ol>
    </div>
  );
}
