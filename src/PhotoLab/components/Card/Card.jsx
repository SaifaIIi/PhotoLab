import React from "react";
import "./Card.css";
import Image from "../Image/Image";

function Card({ src, alt, name, time }) {
  return (
    <div>
      <div className="card-wrapper">
        <div className="main">
          <Image src={src} alt={alt} />
          <div className="discribtion">
            <p>{name}</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
