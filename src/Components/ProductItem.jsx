import React from "react";

function ProductItem(props) {
  const { name, price, addProductOnCart } = props;

  const handleCart = () => {
    addProductOnCart({ name, price, id: `${name}${price}` });
  };

  return (
    <div className="col-sm-4 mb-3">
      <div className="rounded shadow-sm">
        <div className="productImage rounded-top" />
        <div className="p-3">
          <div className="productName mb-3">{name}</div>
          <div className="productPrice mb-3">Price: {price}</div>
          <button
            className="btn btn-outline-primary btn-sm btn-block"
            onClick={handleCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
