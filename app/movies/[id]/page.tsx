"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useStore } from "../../../store";

import Transition from "../../../components/Transition";
import { BsFillPlayFill } from "react-icons/bs";

import classes from "./Movie.module.scss";
import { GetMovie } from "../../../store/api";
import { StoreType } from "../../../store/types";
import PageLoading from "../../../loaders/PageLoading";
import __ from "../../../utils/formatDate";
import Error from "../../../components/Error";
import { dm_sans, quicksand } from "@/fonts";

const Movie = () => {
  const { id } = useParams();
  const store: StoreType = useStore();

  useEffect(() => {
    if (id) {
      store.setLoading("get-movie");
      GetMovie(id.toString()).then((data: any) => {
        if (data.title) {
          store.getMovie(data);
          store.setLoading("");
        } else {
          store.setError(data.message);
        }
      });
    }
    return () => {
      store.clearCurrentMovie();
    };
  }, []);

  const movie = store.currentMovie;

  if (store.error) return <Error message={store.error} />;
  if (store.loading === "get-movie") return <PageLoading />;

  if (movie) {
    return (
      <Transition
        mode="slide-right"
        className={classes.Container + " " + quicksand.className}
      >
        <div className={classes.Preview}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
          />
          <div>
            <span>
              <BsFillPlayFill />
            </span>
            <p>Watch Trailer</p>
          </div>
        </div>
        <section>
          <h4 data-testid="movie-title" className={dm_sans.className}>
            {movie.title}
          </h4>
          <span data-testid="movie-release-date">
            {__(movie?.release_date)}
          </span>
          <span data-testid="movie-runtime">{movie.runtime} minutes</span>
        </section>
        <article>{movie.overview}</article>
      </Transition>
    );
  }
  return null;
};

export default Movie;
