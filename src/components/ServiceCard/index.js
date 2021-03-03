import React from "react";
import PropTypes from "prop-types";
import "./serviceCard.css";

const ServiceCard = ({ service }) => {
  const { name, image, description, price } = service;
  return (
    <div className="cardContainer">
      <img className="avatar" src={image} alt="new" />
      <div className="titleContainer">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="price">Kr. {price}</div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};

export default ServiceCard;
