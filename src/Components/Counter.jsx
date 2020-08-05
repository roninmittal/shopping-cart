import React from "react";

function Counter({
  name,
  quantity,
  id,
  totalProductPrice,
  updateProductOnCart,
}) {
  const handleIncrement = () => {
    updateProductOnCart(id, "inc");
  };

  const handleDecrement = () => {
    updateProductOnCart(id, "dec");
  };

  return (
    <div className="counter row py-2 mx-0 my-2 border rounded">
      <div className="col-sm-6 col-6 text-truncate">{name}</div>
      <div className="col-sm-3 col-2 text-right">{totalProductPrice}</div>
      <div className="col-sm-3 col text-right">
        <button className="btn p-0 border-0" onClick={handleDecrement}>
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"
            />
            <path
              fillRule="evenodd"
              d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <span className="px-sm-3 px-1 align-middle">{quantity}</span>
        <button className="btn p-0 border-0" onClick={handleIncrement}>
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"
            />
            <path
              fillRule="evenodd"
              d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Counter;
