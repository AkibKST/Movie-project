import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

//post a movie data
const createMovie = async (payload: TMovie) => {
  const result = await Movie.create(payload);
  return result;
};

//get a movie data
const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

//get single movie
const getMovieById = async (id: string) => {
  const result = await Movie.findById(id);
  return result;
};

export const MovieServices = {
  createMovie,
  getAllMovies,
  getMovieById,
};

//interface => schema => model => query
