import React from "react";
import Star from "../assets/star.png";
import "./Card.css";

export default function (props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card--container">
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <div className="img-container">
          <img className="img--card" alt="woman swimming" src={props.img} />
        </div>
        <div className="card--stats">
          <img className="img--star" alt="star icon" src={Star} />
          <span className="card--rating">{props.rating}</span>
          <span className="gray">{props.info}</span>
        </div>
        <p>{props.intro}</p>
        <p>
          <span className="card--price">{props.price}</span> / person
        </p>
      </div>
    </div>
  );
}
