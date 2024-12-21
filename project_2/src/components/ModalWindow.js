import React from "react";
import "./ModalWindow.css"; // Optional, for styling

function ModalWindow({ title, image, description, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ModalWindow;
