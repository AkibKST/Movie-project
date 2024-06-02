import { Request, Response } from "express";
import { MovieServices } from "./movie.service";

const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.createMovie(movieData);

  res.json({
    success: true,
    message: "Movie is created successfully !",
    data: result,
  });
};

const getAllMovies = async (req: Request, res: Response) => {
  try {
    const result = await MovieServices.getAllMovies();

    res.status(200).json({
      success: true,
      message: "Movies are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch movies!",
      error: err,
    });
  }
};

const getMovieById = async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    const result = await MovieServices.getMovieById(movieId);

    res.status(200).json({
      success: true,
      message: "Movies are fetched successfully !",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch single movie!",
      error,
    });
  }
};

export const MovieControllers = {
  createMovie,
  getAllMovies,
  getMovieById,
};
