import React from "react";
import SwimLessons from "../assets/swimlesson.jpg";
import Star from "../assets/star.png";
import Sold_Out from "../assets/sold-out.png";
import "./Card.css";

export default function (props) {
  return (
    <div className="card">
      {/* <img className="img--sold_out" alt="sold out banner" src={Sold_Out} /> */}
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
  );
}
