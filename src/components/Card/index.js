import React from "react";
import "./style.css";

function Card(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Title:</strong> {props.title}
            </li>
            <li>
              <strong>Artist:</strong> {props.artist}
            </li>
            <li>
              <strong>Origin:</strong> {props.origin}
            </li>
          </ul>
        </div>
        <span className="remove" onClick={props.handleClick}>
          𝘅
        </span>
      </div>
    );
  }

export default Card;