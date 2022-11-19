import React from "react";
import "./Card.css";

const Card = ({ title, para, target, url, value }) => {
  return (
    <div className="card text-bg-dark overflow-hidden text-center m-auto">
      <img src={url} className="card-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{para}</p>
        <a href={target} className="btn btn-primary">
          {value}
        </a>
      </div>
    </div>
  );
};

export default Card;
