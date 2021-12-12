import React, { useState } from "react";
import Header from "../Components/Header";
import MovieList from "../Components/MovieList";
import { moviesList } from "../Components/MockData";

function Homepage() {
  const [searchTerm, setSearchTerm] = useState("");

  function OnSave(search) {
    setSearchTerm(search);
  }
  function FilterBySearch(movie) {
    if (searchTerm) {
      return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    return true;
  }
  return (
    <div>
      <Header searchTerm={searchTerm} OnSave={OnSave} />
      <MovieList movies={moviesList} FilterBySearch={FilterBySearch} />
    </div>
  );
}

export default Homepage;
