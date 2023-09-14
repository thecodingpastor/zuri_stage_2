import axios from "axios";

export const LoadData = async () => {
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=c815328fa2cd50077d9658b6e39967fb&sort_by=popularity.desc&page=1`;
  // res returns 20 movies
  let res;
  try {
    res = await axios.get(apiUrl);

    return {
      movies: res?.data.results.slice(0, 10),
      banner: res?.data.results.slice(0, 10)[Math.floor(Math.random() * 10)],
    };
  } catch (error: any) {
    return {
      message: error.response.data.status_message,
    };
  }
};

export const GetMovie = async (movieId: string) => {
  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=c815328fa2cd50077d9658b6e39967fb`;

  let res;
  try {
    res = await axios.get(apiUrl);
    const { backdrop_path, overview, title, id, runtime, release_date } =
      res.data;

    return {
      backdrop_path,
      overview,
      title,
      id,
      runtime,
      release_date,
    };
  } catch (error: any) {
    return {
      message: error?.response?.data?.status_message,
    };
  }
};
