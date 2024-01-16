
import React from "react";
import css from "./MovieInfo.module.css";
import { NavLink, Outlet } from "react-router-dom";
import  Cast  from "components/Cast/Cast";
import  Reviews  from "components/Reviews/Reviews";

export const MovieInfo = ({ movieDetails }) => {
  const {
    title,
    release_date,
    vote_average,
    overview,
    poster_path,
    genres,
  }
  = movieDetails;


  return (
        <div className={css.movieDetails}>
      <h1 className={css.title}>Movie details</h1>
      <img
        className={css.moviePoster}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <ul className={css.movieInfo}>
        <li className={css.movieTitle}>{title}</li>
        <li>Release date: {release_date}</li>
        <li>Rating: {vote_average}</li>
        <li className={css.movieOverview}>{overview}</li>
        <li>
          Genres:{" "}
          {genres.map((genre) => (
            <span key={genre.id} className={css.genre}>
              {genre.name}
            </span>
          ))}
        </li>
      </ul>
      <Reviews movie={movieDetails}/>
      <Cast movie={movieDetails}/>
      <ul className={css.navList}>
        <li className={css.navLinkItem}>
          <NavLink 
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/movies/cast"
          >
            Cast
          </NavLink>
        </li>
        <li className={css.navLinkItem}>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ''}`
            }
            to="/movies/reviews"
          >
            Reviews
          </NavLink>
        </li>
        <Outlet />
      </ul>
      
    </div>
)
  
}

