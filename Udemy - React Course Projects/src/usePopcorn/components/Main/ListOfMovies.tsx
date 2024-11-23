import { useState } from "react";
import { tempMovieData } from "../../utils/constants";
import { TMovie } from "../../utils/types";
import Movie from "./Movie";

export default function ListOfMovies() {
  const [movies, setMovies] = useState<TMovie[]>(tempMovieData);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
