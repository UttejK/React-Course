type TMovie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

type TWatchedMovie = TMovie & {
  runtime: number;
  imdbRating: number;
  userRating: number;
};

export type { TMovie, TWatchedMovie };
