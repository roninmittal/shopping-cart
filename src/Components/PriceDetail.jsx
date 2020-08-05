import React from "react";

function PriceDetail({ name, quantity, totalProductPrice }) {
  return (
    <div className="priceDetail row py-2 mx-0 my-2">
      <div className="col-sm-6 col-6 text-truncate">{name}</div>
      <div className="col-sm-3 col-2">
        x<span className="px-sm-3 px-1">{quantity}</span>:
      </div>
      <div className="col-sm-3 col text-right">{totalProductPrice}</div>
    </div>
  );
}

export default PriceDetail;
