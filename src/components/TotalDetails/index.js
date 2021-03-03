import React from "react";
import PropTypes from "prop-types";
import "./totalDetails.css";

const TotalDetails = ({ totalitems }) => {
  let total = null;
  console.log(totalitems, "totalitems is");
  return (
    <div className="totalContainer">
      {totalitems &&
        totalitems.map((item) => {
          total += Number(item.price);
          return (
            Number(item.price) > 0 && (
              <div className="itemContainer">
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
            )
          );
        })}
      <div className="itemContainer border">
        <div>Total Costing</div>
        <div>{total}</div>
      </div>
    </div>
  );
};

TotalDetails.propTypes = { total: PropTypes.object };

export default TotalDetails;
