

import React from "react";
import css from "./MovieInfo.module.css";

export const MovieInfo = ({ movie }) => (
  <div className={css.movieDetails}>
    <h1 className={css.title}>Movie details</h1>
    <img
      className={css.moviePoster}
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.original_title}
    />
    <ul className={css.movieInfo}>
      <li className={css.movieTitle}>{movie.original_title}</li>
      <li>Release date: {movie.release_date}</li>
      <li>Rating: {movie.vote_average} ({movie.vote_count} votes)</li>
      <li className={css.movieOverview}>{movie.overview}</li>
      <li>
        Genres:{" "}
        {movie.genres.map((genre) => (
          <span key={genre.id} className={css.genre}>
            {genre.name}
          </span>
        ))}
      </li>
    </ul>
  </div>
);

