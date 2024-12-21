import React from "react";

function Card({ title, image, description, onOpen }) {
  return (
    <div className="card" onClick={onOpen}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
