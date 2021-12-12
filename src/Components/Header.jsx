import React from "react";
import StarRatingDemo from "./Rating";

function Header({ searchTerm, OnSave, rating}) {
  function saveSearchTerm(e) {
    const Term = e.target.value;
    OnSave({search:Term})
  }
  function handlerate(ratingNumber) {
    OnSave({rating:ratingNumber})
  }
  return (
    <header>
      <h1 className="khal">KHAL-FLIX</h1>
      <StarRatingDemo handlerate={handlerate} rating={rating}/>
      <input
        className="search"
        value={searchTerm}
        type="search"
        placeholder="search..."
        onChange={saveSearchTerm}
      />
    </header>
  );
}

export default Header;
