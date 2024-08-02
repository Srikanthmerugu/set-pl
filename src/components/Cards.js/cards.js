import React from "react";
import "./cards.css";
import NatureButton from "../Button/button";
import Button from "../Button/button";

const Cards = () => {
  return (
    <div>
      <div className="card-container">
        <div className="card-sub-container">
            <img src="https://img.freepik.com/free-photo/beautiful-tropical-leaves_23-2148245155.jpg?t=st=1722618742~exp=1722622342~hmac=4b9e2dafe18438d241e38a1221858448505a442cb0d7fd7e4783e93e577814fa&w=1060" />

            <div className="card-inside-body">
            <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="btn-contnaier">
          <button className="btn">button</button>

          </div>

            </div>









        </div>
      </div>
    </div>
  );
};

export default Cards;
