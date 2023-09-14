"use client";

import { useEffect } from "react";
import { useStore } from "../store";
import { BsFillPlayCircleFill } from "react-icons/bs";

import classes from "./Banner.module.scss";
import { StoreType } from "../store/types";
import Link from "next/link";
import { dm_sans, quicksand } from "@/fonts";

const Banner: React.FC<any> = () => {
  const store: StoreType = useStore();
  useEffect(() => {
    store.randomBanner();
  }, []);

  const banner = store.banner;
  if (!banner) return <div className={classes.Placeholder}></div>;

  return (
    <section className={classes.Container}>
      <img
        src={`https://image.tmdb.org/t/p/original/${banner.backdrop_path}`}
        alt="Banner"
      />
      <div>
        <h3 className={dm_sans.className}>{banner.title}</h3>
        <p className={quicksand.className}>{banner.overview}</p>
        <Link href={"/movies/" + banner.id}>
          <BsFillPlayCircleFill />
          <span className={quicksand.className}> Watch Trailer</span>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
