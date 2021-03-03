import React from "react";
import PropTypes from "prop-types";
import "./serviceTitle.css";

const ServiceTitle = ({ name }) => {
  return <h1 className="serviceHeader">{name}</h1>;
};

ServiceTitle.propTypes = { name: PropTypes.string.isRequired };

export default ServiceTitle;
