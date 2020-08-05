import React, { useState } from "react";

function Search({ searchProducts }) {
  const [input, setInput] = useState("");

  const handleSearching = (event) => {
    const {
      target: { value },
    } = event;
    setInput(value); // for setting to input
    searchProducts(value); // for passing to main file
  };

  return (
    <div className="search">
      <input
        className="form-control"
        value={input}
        type="text"
        placeholder="Search by product"
        onChange={handleSearching}
      />
    </div>
  );
}

export default Search;
