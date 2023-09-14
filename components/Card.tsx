import Link from "next/link";
import { MovieType } from "../store/types";
import __ from "../utils/formatDate";

import classes from "./Card.module.scss";
import { dm_sans, quicksand } from "@/fonts";

const Card = (movie: MovieType) => {
  return (
    <Link
      className={classes.Container}
      data-testid="movie-card"
      href={"/movies/" + movie.id}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        data-testid="movie-poster"
      />
      <h3 data-testid="movie-title" className={dm_sans.className}>
        {movie?.title}
      </h3>
      <span data-testid="movie-release-date" className={quicksand.className}>
        {__(movie?.release_date)}
      </span>
    </Link>
  );
};

export default Card;
