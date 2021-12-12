import React, { useState } from "react";
import Header from "../Components/Header";
import MovieList from "../Components/MovieList";
import { moviesList } from "../Components/MockData";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setrating] = useState(null);
  function OnSave(params) {
    setSearchTerm(params.search);
    setrating(params.rating);
  }

  function FilterBySearch(movie) {
    if (searchTerm) {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (rating) {
      return Number(movie.rate) >= Number(rating);
    }

    return true;
  }
  return (
    <div>
      <Header searchTerm={searchTerm} OnSave={OnSave} rating={rating} />
      <MovieList movies={moviesList} FilterBySearch={FilterBySearch} />
    </div>
  );
}

export default Homepage;
