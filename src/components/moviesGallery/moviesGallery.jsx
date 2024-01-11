import React from "react";
import css from "./moviesGallery.module.css";
export const MoviesList = ({ movies }) => {
  
  if (!Array.isArray(movies) || !movies.length) {
    return <p>No movies to display</p>;
  }
    return (
      
        <div className={css.moviesListContainer}>
      <h2 className={css.pageTitle}>Only trending today</h2>
      <ul className={css.moviesList}>
      {movies.map(({ id, original_title, poster_path, title }) => (
        <li key={id} className={css.moviesListItem}>
          <img className={css.moviesListImg}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <p className={css.moviesListTitle}>{original_title}</p>
        </li> 
      ))}</ul>
    </div>
  );
};