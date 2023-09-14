import { useStore } from "../store";
import Card from "./Card";

import classes from "./Gridlist.module.scss";

const Gridlist = () => {
  const movies = useStore((store) => store.movies);

  return (
    <section className={classes.Container}>
      <header>
        <h3>Featured</h3>
        <span>See more {">"} </span>
      </header>
      <div className={classes.Grid}>
        {movies.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default Gridlist;
