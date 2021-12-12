import React from "react";
import Movie from "./Movie";
import { Link } from "react-router-dom";
function MovieList({ movies, FilterBySearch }) {
  return (
    <div className="movie-container">
      {movies.filter(FilterBySearch).map((movie, i) => (
        <Link to={`movie/${movie.id}`}>
          <Movie {...movie} key={movie.id} title={movie.title} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
