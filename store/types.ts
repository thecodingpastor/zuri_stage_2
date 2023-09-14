export interface MovieType {
  backdrop_path: string;
  title: string;
  overview: string;
  id: string;
  release_date: Date;
  poster_path: string;
  runtime?: string;
}

export interface StoreType {
  movies: MovieType[];
  loading: string;
  banner: MovieType | null;
  error: string;
  currentMovie: MovieType | null;
  load: (movies: MovieType, banner: MovieType) => void;
  getMovie: (movie: MovieType) => void;
  clearCurrentMovie: () => void;
  setError: (message: string) => void;
  randomBanner: () => void;
  setLoading: (loadingState: string) => void;
}
