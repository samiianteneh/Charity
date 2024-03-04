// ChildComponent.js
import React from "react";

function ChildComponent({ openModal }) {
  return (
    <div>
      <button onClick={openModal}>Read More ....</button>
    </div>
  );
}

export default ChildComponent;
