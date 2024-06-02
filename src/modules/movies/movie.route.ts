import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

// post route
router.post("/", MovieControllers.createMovie);

//get route
router.get("/", MovieControllers.getAllMovies);

//get route by single id
router.get("/:movieId", MovieControllers.getMovieById);

export const MovieRoutes = router;
