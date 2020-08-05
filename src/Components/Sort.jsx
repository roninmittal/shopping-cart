import React, { useState } from "react";

function Sort({ sortingProducts }) {
  const [selectedValue, setSelectedValue] = useState("lth");

  const handleSorting = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedValue(value); // for setting into dropdown
    sortingProducts(value); // for passing to main file
  };
  return (
    <div className="mb-3 row justify-content-end">
      <div className="col-sm-3">
        <select
          className="form-control"
          value={selectedValue}
          onChange={handleSorting}
        >
          <option value="asc">Sort by name Asc</option>
          <option value="desc">Sort by name Desc</option>
          <option value="htl">Sort by price HTL</option>
          <option value="lth">Sort by price LTH</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
