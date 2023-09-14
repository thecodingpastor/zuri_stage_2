import { create } from "zustand";
import { StoreType, MovieType } from "./types";

export const useStore = create<StoreType>((set) => ({
  movies: [],
  loading: "",
  error: "",
  banner: null,
  currentMovie: null,
  load: (movies: MovieType, banner: MovieType) => {
    set((state: any) => ({
      ...state,
      error: "",
      movies,
      banner,
    }));
  },
  getMovie: (movie: MovieType) => {
    set((state: StoreType) => ({
      ...state,
      error: "",
      currentMovie: movie,
    }));
  },
  clearCurrentMovie: () => {
    set((state: StoreType) => ({
      ...state,
      error: "",
      currentMovie: null,
    }));
  },
  setError: (message: string) => {
    set((state: StoreType) => ({
      ...state,
      error: message,
    }));
  },
  randomBanner: () => {
    set((state: StoreType) => ({
      ...state,
      banner: state.movies[Math.floor(Math.random() * 10)],
    }));
  },
  setLoading: (loadingState: string) => {
    set((state: StoreType) => ({
      ...state,
      loading: loadingState,
    }));
  },
}));
