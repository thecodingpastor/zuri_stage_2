"use client";

import Banner from "../components/Banner";
import Transition from "../components/Transition";
import Error from "../components/Error";

import classes from "./Home.module.scss";
import Gridlist from "../components/Gridlist";
import { useStore } from "../store";
import PageLoading from "@/loaders/PageLoading";
import { MovieType, StoreType } from "@/store/types";
import { LoadData } from "@/store/api";
import { useEffect } from "react";

const Home = () => {
  const error = useStore((store) => store.error);
  const store: StoreType = useStore();

  useEffect(() => {
    if (store.movies.length === 0) {
      LoadData().then(
        (data: {
          movies?: MovieType;
          banner?: MovieType;
          message?: string;
        }) => {
          if (data.message) {
            store.setError(data.message);
          } else {
            if (data.movies && data.banner) {
              store.load(data.movies, data.banner);
            }
          }
        }
      );
    }
  }, []);

  if ((!store.banner || store.movies.length === 0) && !store.error)
    return <PageLoading />;

  if (error) return <Error message={error} />;

  return (
    <Transition mode="slide-right" className={classes.Container}>
      <Banner />
      <Gridlist />
    </Transition>
  );
};

export default Home;
